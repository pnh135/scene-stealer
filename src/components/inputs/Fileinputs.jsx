import { useState } from 'react';
import styled from 'styled-components';
import supabase from '../../supabase/Client';

const FileInputs = ({ imageUrl, setImageUrl }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [placeholder, setPlaceholder] = useState('첨부파일');

  const bucketName = 'news_feeds_image'; // Supabase Storage 버킷명

  // 파일 선택 시 미리보기 및 업로드 실행
  const handleFileChange = async (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(URL.createObjectURL(file)); // 미리보기용 URL 생성
      setPlaceholder(file.name); // UI 업데이트

      // 자동 업로드 실행
      await handleStorageUpload(file);
    }
  };

  // 이미지 업로드 함수
  const handleStorageUpload = async (file) => {
    if (!file) {
      alert('이미지를 선택하세요.');
      return;
    }

    const fileName = `${Date.now()}_${file.name}`; // 고유한 파일명 생성

    // Supabase Storage에 업로드 (data 제거)
    const { error } = await supabase.storage.from(bucketName).upload(fileName, file);

    if (error) {
      console.error('이미지 업로드 오류:', error.message);
      alert('업로드 실패');
      return;
    }

    // 업로드된 이미지의 URL 가져오기
    const { data: publicUrlData } = supabase.storage.from(bucketName).getPublicUrl(fileName);
    setImageUrl(publicUrlData.publicUrl);
  };

  return (
    <>
      <PreviewContainer>
        {selectedFile ? (
          <PreviewImage src={selectedFile} alt="미리보기" />
        ) : (
          <EmptyPreview>이미지를 선택하세요</EmptyPreview>
        )}
      </PreviewContainer>

      <FileInputStyle className="filebox">
        <FileInput className="upload-name" placeholder={placeholder} disabled />
        <LabelStyle htmlFor="file">파일찾기</LabelStyle>
        <input type="file" id="file" accept=".png,.jpg,.jpeg" onChange={handleFileChange} />
      </FileInputStyle>

      {imageUrl && (
        <div>
          <h3>업로드된 이미지</h3>
          <img src={imageUrl} alt="Uploaded" width={200} />
        </div>
      )}
    </>
  );
};

// 스타일링 코드
const PreviewContainer = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const EmptyPreview = styled.div`
  color: #888;
`;

const FileInputStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 1rem;
  margin-top: 5rem;
`;

const FileInput = styled.input`
  display: inline-block;
  color: #bdbdbd;
  border: solid 1px #bdbdbd;
  border-radius: 3px;
`;

const LabelStyle = styled.label`
  display: inline-block;
  border: 1px solid #333;
  border-radius: 3px;
  padding: 0.5rem;
  transition: background-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #bdbdbd;
  }
`;

export default FileInputs;

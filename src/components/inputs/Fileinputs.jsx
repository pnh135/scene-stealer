import { useRef, useState } from 'react';
import styled from 'styled-components';

const FileInputs = () => {
  // 업로드하는 파일의 path값 반환
  const fileText = () => {
    if (img_ref.current.value !== '') {
      const fileName = img_ref.current.value;
      setPlaceholder(fileName);
    } else {
      // 데이터 오류
      console.log('파일 데이터 오류.');
    }
  };

  const img_ref = useRef(null);

  // 업로드 하지 않을 때 첨부파일로 보이게 하는 초기값
  const [placeholder, setPlaceholder] = useState('첨부파일');

  return (
    <>
      <FileInputStyle className="filebox">
        <FileInput className="upload-name" placeholder={placeholder} disabled />
        <LabelStyle htmlFor="file">파일찾기</LabelStyle>
        <input type="file" id="file" accept=".png,.jpg, .jpeg" ref={img_ref} onChange={fileText} />
      </FileInputStyle>
    </>
  );
};

const FileInputStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
`;

const FileInput = styled.input`
  display: inline-block;
  color: #bdbdbd;
  border: solid 1px #bdbdbd;
`;

const LabelStyle = styled.label`
  display: inline-block;
  border: 1px solid #333;
  padding: 0.5rem;
  transition: background-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #bdbdbd;
  }
`;

export default FileInputs;

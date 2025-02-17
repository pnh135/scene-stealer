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
      <div className="filebox">
        <StdFileInput className="upload-name" placeholder={placeholder} disabled />
        <StdLabel htmlFor="file">파일찾기</StdLabel>
        <input type="file" id="file" accept=".png,.jpg, .jpeg" ref={img_ref} onChange={fileText} />
      </div>
    </>
  );
};

const StdFileInput = styled.input`
  display: inline-block;
  width: 40%;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  color: #999999;
`;

const StdLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  vertical-align: middle;
  background-color: #999999;
  cursor: pointer;
  height: 40px;
  margin-left: 10px;
`;

export default FileInputs;

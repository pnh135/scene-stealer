import styled from 'styled-components';

const FileInputs = () => {
  return (
    <>
      <div className="filebox">
        <StdFileInput className="upload-name" placeholder="첨부파일" />
        <StdLabel htmlFor="file">파일찾기</StdLabel>
        <input type="file" id="file" />
      </div>
    </>
  );
};

export default FileInputs;

const StdFileInput = styled.input`
  display: inline-block;
  width: 300px;
  height: 300px;
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

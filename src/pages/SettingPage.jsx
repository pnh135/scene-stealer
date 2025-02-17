import { useState } from 'react';
import styled from 'styled-components';
import { ActionButtonStyle } from '../components/ActionButton';

const SettingPage = () => {
  const [src, setSrc] = useState('');

  // 선택된 파일을 이미지 주소로 보내주는 로직
  const handleInput = (e) => {
    const file = e.target.files[0];

    console.log(file);

    if (file) {
      const reader = new FileReader();

      console.log(reader);

      reader.onloadend = () => {
        setSrc(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <SettingPageWrapper>
      <SettingPageImage src={src} alt="" />
      <SettingPageInput type="file" onChange={handleInput} />
      <SettingPageButton>수정하기</SettingPageButton>
    </SettingPageWrapper>
  );
};

const SettingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin-top: 2rem;
`;

const SettingPageImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: contain;
  border: 1px solid #bdbdbd;
`;

const SettingPageInput = styled.input``;

const SettingPageButton = styled(ActionButtonStyle)`
  background-color: #bdbdbd;
  font-size: 1.2rem;
  width: 90%;
  text-align: center;
  color: #333;
`;

export default SettingPage;

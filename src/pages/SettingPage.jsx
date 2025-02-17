import React, { useState } from 'react';
import styled from 'styled-components';

const SettingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;    
`;

const SettingPageImage = styled.img`
  width: 200px;        
  height: 200px;        
  border-radius: 50%;   
  object-fit: cover;
  border: 2px solid #ccc; 
`;

const SettingPageInput = styled.input`
  margin-top: 20px;    
`
const SettingPageButton = styled.button`
  width: 200px;
  text-align: center;
  margin-top: 20px;    
  padding: 10px 20px;  
  background-color: black;
  color: white;        
  border-radius: 5px; 
`
const SettingPage = () => {
  const [src, setSrc] = useState('')

  //선택된 파일을 이미지 주소로 보내주는 로직
  const handleInput = (e) => {
    const file = e.target.files[0];
    console.log(file)
    if (file) {
      const reader = new FileReader(); 
      console.log(reader)
      reader.onloadend = () => {
        setSrc(reader.result); 
      }
      reader.readAsDataURL(file); 
      }
  };
  return (
    <SettingPageWrapper>
      <SettingPageImage src={src} alt=""/>
      <SettingPageInput type="file" onChange={handleInput}/>
      <SettingPageButton>수정하기</SettingPageButton>
    </SettingPageWrapper>
  );
}

export default SettingPage;

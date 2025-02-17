import styled from 'styled-components';

export const StdSignupContainer = styled.form`
  display: grid;
  grid-template-rows: repeat(5, minmax(50px, auto));
  gap: 20px;
  width: 40%;
  padding: 5%;
  height: fit-content;
  justify-content: center;
  background-color: lightcoral;
  border-radius: 10%;
  text-align: center;
  position: fixed;
  left: 30%;
  top: 20%;
`;

export const StdLoginContainer = styled.form`
  display: grid;
  grid-template-rows: repeat(3, minmax(50px, auto));
  gap: 20px;
  width: 40%;
  padding: 5%;
  height: fit-content;
  justify-content: center;
  background-color: lightcoral;
  border-radius: 10%;
  text-align: center;
  position: fixed;
  left: 30%;
  top: 20%;
`;

export const StdDataInput = styled.input`
  height: max-content;
  width: 200px;
`;

export const StdDataBtn = styled.button`
  background-color: red;
  color: white;
`;

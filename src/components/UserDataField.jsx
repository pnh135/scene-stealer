import styled from 'styled-components';

const DataField = ({ Children }) => {
  return (
    <>
      <StdUserContainer>{Children}</StdUserContainer>
    </>
  );
};

export default DataField;

const StdUserContainer = styled.div`
  display: grid;
`;

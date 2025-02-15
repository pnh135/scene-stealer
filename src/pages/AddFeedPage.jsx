import React from 'react';
import CreateFeedInputs from '../components/inputs/CreateFeedInputs';
import FileInputs from '../components/inputs/FileInputs';

const AddFeedPage = () => {
  return (
    <>
      <div>피드추가페이지입니다</div>
      <FileInputs />
      <div>
        <CreateFeedInputs />
      </div>
    </>
  );
};

export default AddFeedPage;

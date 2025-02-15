import React from 'react';
import CreateFeedInputs from '../components/inputs/CreateFeedInputs';
import Fileinputs from '../components/inputs/Fileinputs';

const AddFeedPage = () => {
  return (
    <>
      <div>피드추가페이지입니다</div>
      <Fileinputs />
      <div>
        <CreateFeedInputs />
      </div>
    </>
  );
};

export default AddFeedPage;

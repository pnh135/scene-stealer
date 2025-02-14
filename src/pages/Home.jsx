import React from "react";
import LoginInputs from "../components/inputs/LoginInputs";
import SignupInputs from "../components/inputs/SignupInputs";

const Home = () => {
  return (
    <>
      <div>
        <LoginInputs />
        <SignupInputs />
      </div>
    </>
  );
};

export default Home;

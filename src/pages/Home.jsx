import CreateFeedInputs from "../components/inputs/CreateFeedInputs";
import LoginInputs from "../components/inputs/LoginInputs";
import SignupInputs from "../components/inputs/SignupInputs";

const Home = () => {
  return (
    <>
      <div>
        <LoginInputs />
        <SignupInputs />
        <CreateFeedInputs />
      </div>
    </>
  );
};

export default Home;

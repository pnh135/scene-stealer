import CreateFeedInputs from "../components/inputs/CreateFeedInputs";
import LoginInputs from "../components/inputs/LoginInputs";
import SearchBarInput from "../components/inputs/SearchBarInput";
import SignupInputs from "../components/inputs/SignupInputs";

const Home = () => {
  return (
    <>
      <div>
        <LoginInputs />
        <SignupInputs />
        <CreateFeedInputs />
        <SearchBarInput />
      </div>
    </>
  );
};

export default Home;

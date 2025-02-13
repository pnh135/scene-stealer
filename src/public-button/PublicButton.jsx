const PublicButton = () => {
  const handleBack = () => {
    window.history.back();
  };

  return <button onClick={handleBack}>뒤로가기</button>;
};

export default PublicButton;

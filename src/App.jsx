import Router from './shared/Router';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      {/* GlobalStyle로 기본적인 페이지 레이아웃 적용 */}
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;

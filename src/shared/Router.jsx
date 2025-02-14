import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
// import Side from '../pages/Side';
// import Bookmarks from '../pages/Bookmarks';
// import AddFeed from '../pages/AddFeed';
import MainPage from '../pages/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />}>
          {/* <Route path="/" element={<Side />} />
          <Route path="/add-feed" element={<AddFeed />} />
          <Route path="/bookmarks" element={<Bookmarks />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MainPage from '../pages/MainPage';
import Side from '../pages/Side';
import AddFeed from '../pages/AddFeed';
import Bookmarks from '../pages/Bookmarks';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/" element={<Side />} />
        <Route path="/add-feed" element={<AddFeed />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

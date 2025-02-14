import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MainPage from '../pages/MainPage';
import Side from '../pages/Side';
import AddFeedPage from '../pages/AddFeedPage';
import BookmarksPage from '../pages/BookmarksPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/" element={<Side />} />
        <Route path="/add-feed" element={<AddFeedPage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

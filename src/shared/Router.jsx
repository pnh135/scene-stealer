import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MainPage from '../pages/MainPage';
import AddFeedPage from '../pages/AddFeedPage';
import BookmarksPage from '../pages/BookmarksPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/main/add-feed" element={<AddFeedPage />} />
        <Route path="/main/bookmarks" element={<BookmarksPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MainPage from '../pages/MainPage';
import AddFeedPage from '../pages/AddFeedPage';
import BookMarksPage from '../pages/BookMarksPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import DetailPage from '../pages/DetailPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/main/add-feed" element={<AddFeedPage />} />
        <Route path="/main/bookmarks" element={<BookMarksPage />} />
        <Route path="/main/login" element={<LoginPage />} />
        <Route path="/main/signup" element={<SignupPage />} />
        <Route path="/main/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

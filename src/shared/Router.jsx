import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MainPage from '../pages/MainPage';
import AddFeedPage from '../pages/AddFeedPage';
import BookMarkPage from '../pages/BookMarkPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import DetailPage from '../pages/DetailPage';
import SettingPage from '../pages/SettingPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/main/add-feed" element={<AddFeedPage />} />
        <Route path="/main/bookmark" element={<BookMarkPage />} />
        <Route path="/main/setting" element={<SettingPage />} />
        <Route path="/main/login" element={<LoginPage />} />
        <Route path="/main/signup" element={<SignupPage />} />
        <Route path="/main/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

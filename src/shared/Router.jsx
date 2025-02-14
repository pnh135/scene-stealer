import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Side from '../pages/Side';
import Bookmarks from '../pages/Bookmarks';
import AddFeed from '../pages/AddFeed';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Side />} />
        <Route path="/add-feed" element={<AddFeed />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Side from '../pages/Side';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Side />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

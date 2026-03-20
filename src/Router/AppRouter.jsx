import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../Pages/Homepage/Homepage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* Aquí añadirás más rutas en el futuro, ej: /login, /profile */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
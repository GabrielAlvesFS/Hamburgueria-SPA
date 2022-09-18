import { Routes, Route } from 'react-router-dom';
import CartProvider from './context/cart';
import './global.css';
import { Aperitivos } from './pages/Aperitivos';
import { Burguers } from './pages/Burguers';
import { Cadastro } from './pages/Cadastro';
import { Home } from './pages/Home';

function App() {
  return (
    // Rotas
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Burguers" element={<Burguers />} />
        <Route path="/Aperitivos" element={<Aperitivos />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </CartProvider>
  );
}

export default App;

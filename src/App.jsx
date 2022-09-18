import { Routes, Route } from 'react-router-dom';
import CartProvider from './context/cart';
import './global.css';
import { Cadastro } from './pages/Cadastro';
import { Home } from './pages/Home';

function App() {
  return (
    // Rotas
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </CartProvider>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import CartProvider from './context/cart';
import './global.css';
import { Aperitivos } from './pages/Aperitivos';
import { Bebidas } from './pages/Bebidas';
import { Burguers } from './pages/Burguers';
import { Cadastro } from './pages/Cadastro';
import { Home } from './pages/Home';
import { Sobremesas } from './pages/Sobremesas';
import { Pagamento } from './pages/Pagamento';

function App() {
  return (
    // Rotas
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Burguers" element={<Burguers />} />
        <Route path="/Aperitivos" element={<Aperitivos />} />
        <Route path="/Sobremesas" element={<Sobremesas />} />
        <Route path="/Bebidas" element={<Bebidas />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Pagamento" element={<Pagamento />} />
      </Routes>
    </CartProvider>
  );
}

export default App;

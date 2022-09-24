import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CartProvider from './context/cart';
import './global.css';
import { Aperitivos } from './pages/Aperitivos';
import { Bebidas } from './pages/Bebidas';
import { Burguers } from './pages/Burguers';
import { Cadastro } from './pages/Cadastro';
import { Carrinho } from './pages/Carrinho';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Sobremesas } from './pages/Sobremesas';
import { Pagamento } from './pages/Pagamento';
import 'react-toastify/dist/ReactToastify.min.css';

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
        <Route path="/Carrinho" element={<Carrinho />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Pagamento" element={<Pagamento />} />
      </Routes>
      <ToastContainer />
    </CartProvider>
  );
}

export default App;

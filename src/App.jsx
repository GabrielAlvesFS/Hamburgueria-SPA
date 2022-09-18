import { Routes, Route } from 'react-router-dom';
import CartProvider from './context/cart';
import './global.css';
import { Home } from './pages/Home';

function App() {
  return (
    // Rotas
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </CartProvider>
  );
}

export default App;

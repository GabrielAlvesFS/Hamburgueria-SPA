import { Routes, Route } from 'react-router-dom';
import './global.css';
import { Home } from './pages/Home';

function App() {
  return (
    // Rotas
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

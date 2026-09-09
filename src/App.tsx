import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LPHome from './pages/LPHome';
import LPEmpresas from './pages/LPEmpresas';
import LPAcademias from './pages/LPAcademias';
import LPUsuario from './pages/LPUsuario';
import { Calculadoras } from './pages/Calculadoras';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LPHome />} />
        <Route path="/empresas" element={<LPEmpresas />} />
        <Route path="/academias" element={<LPAcademias />} />
        <Route path="/usuario" element={<LPUsuario />} />
        <Route path="/usuarios" element={<Navigate to="/usuario" replace />} />
        <Route path="/calculadoras" element={<Calculadoras />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

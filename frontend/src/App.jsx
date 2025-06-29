import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Catalog from './pages/Catalog.jsx';
import BeneficiaryForm from './pages/BeneficiaryForm.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{padding:10,borderBottom:'1px solid #ddd'}}>
        <Link to="/">Catalog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Catalog/>}/>
        <Route path="/beneficiary" element={<BeneficiaryForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

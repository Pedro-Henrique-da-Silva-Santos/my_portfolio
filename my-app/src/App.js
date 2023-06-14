import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import './App.scss';


function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> 
      <Route path="sobre" element={<Sobre />} /> 
      <Route path="contato" element={<Contato />} />    
    </Route>
  </Routes>
  </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Layout from './components/Layout';
import Sobre from './components/Sobre';
import Home from './components/Home';
import './App.scss';


function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> 
      <Route path="sobre" element={<Sobre />} /> 
      <Route path="contato" element={<Contato />} />    
      <Route path="projetos" element={<Projetos />} />  
    </Route>
  </Routes>
  </>
  );
}

export default App;

// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Cadastro from './pages/Cadastro.jsx';
import Postagens from './pages/Postagens.jsx';

function App() {
   return (
       <Router>
           <Routes>
               <Route path="/" element={<Postagens/>} />
               <Route path="/login" element={<Login/>} />
               <Route path="/cadastro" element={<Cadastro/>} />
           </Routes>
       </Router>
   );
}

export default App;

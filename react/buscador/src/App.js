import { useState } from 'react';
import api from './service/api';


import {FiSearch, FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi';
import './styles.css'

function App() {

const [input, setInput] = useState('')
const [cep, setCep] = useState ({});

  async function handleSearch() {
   
    if (input === '') {
      alert('Digite um CEP!')
      return
    }

    if (input.length < 8) {
      alert('CEP inválido! O CEP deve ter pelo menos 8 dígitos.');
      return;
  }
    if (input.length > 8) {
      alert('CEP inválido! O CEP deve ter no máximo 8 dígitos.');
      return;
    }
  try {
    const response = await api.get(`${input}/json`);
    setCep(response.data);
    setInput('');
  
  }catch{
    alert('Ops erro ao buscar CEP!');
    setInput('');
  }

  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
      <input 
      type="text"
      placeholder="Digite o CEP..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />

      <button className="buttonSearch" onClick={handleSearch}>
        <FiSearch size={25} color="#FFF"/>
      </button>
      </div> 

    {Object.keys(cep).length > 0 && (

    <main className="main">
    <h2>CEP: {cep.cep}</h2>

    <span>{cep.logradouro}</span>
    <span>Complemento: {cep.complemento}</span>
    <span>Bairro: {cep.bairro}</span>
    <span>Cidade: {cep.localidade} - {cep.uf}</span>
    </main>
      
    )}

      {/* Ícones e links */}
      <div className="social-icons-container">
        <a href="https://github.com/thiarly" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FiGithub size={25} color="#FFF" />
        </a>
        <a href="https://www.linkedin.com/in/thiarly-cavalcante-b0aa6056/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FiLinkedin size={25} color="#FFF" />
        </a>
        <a href="https://www.facebook.com/thiarly.cavalcante/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FiFacebook size={25} color="#FFF" />
        </a>
      </div>
       {/* Nome do Desenvolvedor */}
       <div className="developer-name">
        Thiarly Cavalcante
      </div>

    </div>
  );
}

export default App;
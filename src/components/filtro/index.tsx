import { useState } from "react";

function Filtro() {
  const [data, setData] = useState('');
  const [genero, setGenero] = useState('0');
  const [cidade, setCidade] = useState('0');

  const handleFiltrar = async () => {
    const filtros = {
      data,
      genero,
      cidade
    };

    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(filtros)
      });

      const resultado = await response.json();
      console.log('Resultados:', resultado);
    } catch (error) {
      console.error('Erro ao filtrar:', error);
    }
  };
  
    return (
      
      <div className="container-filtro">
        <div>
          <input className="filtro-botao" type="date"/>
        </div>
        <div>
          <select className="filtro-botao">
              <option value="0">Genero</option>
              <option value="1">Rock</option>
              <option value="2">Teatro</option>
              <option value="3">Bares</option>
              <option value="4">Resturantes</option>
              <option value="5">Festas</option>
              <option value="6">Shows</option>
          </select>
        </div>
        
        <div>
          <select className="filtro-botao">
            <option value="0">Cidade</option>
            <option value="1">Bauru</option>
            <option value="2">Piratininga</option>
            <option value="3">Pederneiras</option>
            <option value="4">Agudos</option>
          </select>
        </div>
        
        <div>
          <button className="filtro-botao css-botao" onClick={handleFiltrar}>Filtrar</button>
                {/* <Link to='/' className='link-botao-menu'> Home </Link> */}
        </div>
      </div>
    );
}

export default Filtro;
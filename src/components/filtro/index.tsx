import { useState } from "react";
import { api } from "../../api";
import { useNavigate } from "react-router-dom";

function Filtro() {


  interface EVENTO {
  id: string;
  nome: string;
  data_evento: string;
  horario: string;
  genero: { id: number; nome: string };
  cidade: { id: number; nome: string };
  endereco: string;
  numero: string;
  descricao: string;
  classificacao: number;
  image: string;
}

  const [data, setData] = useState('');
  const [genero, setGenero] = useState('0');
  const [cidade, setCidade] = useState('0');
  const [eventos, setEventos] = useState<EVENTO[]>([]);
   const navigate = useNavigate();

  const handleFiltrar = async () => {
    try {
      const resultado = await api.FiltrarEventos(data, genero, cidade);
      console.log('Resultados:', resultado);

      navigate('/filtroevento', { state: { eventos: resultado } });
    } catch (error) {
      console.error('Erro ao filtrar:', error);
    }
  };

  return (
    <div>
      <div className="container-filtro">
        <div>
          <input
            className="filtro-botao"
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <div>
          <select
            className="filtro-botao"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          >
            <option value="0">Genero</option>
            <option value="1">Rock</option>
            <option value="2">Teatro</option>
            <option value="3">Bares</option>
            <option value="4">Restaurantes</option>
            <option value="5">Festas</option>
            <option value="6">Shows</option>
          </select>
        </div>
        <div>
          <select
            className="filtro-botao"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          >
            <option value="0">Cidade</option>
            <option value="1">Bauru</option>
            <option value="2">Piratininga</option>
            <option value="3">Pederneiras</option>
            <option value="4">Agudos</option>
          </select>
        </div>
        <div>
          <button className="filtro-botao css-botao" onClick={handleFiltrar}>
            Filtrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filtro;

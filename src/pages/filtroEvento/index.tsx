import { useLocation } from "react-router-dom";
import Cabecalho from "../../components/cabecalho";
import Filtro from "../../components/filtro";
import Rodape from "../../components/rodape";

interface Evento {
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

function FiltroEvento() {
  const location = useLocation();
  const eventos: Evento[] = location.state?.eventos || [];

  return (
    
    <div>
        <Cabecalho/>
        <Filtro/>
      {eventos.length === 0 ? (
        <p>Nenhum evento encontrado.</p>
      ) : (
        eventos.map((evento) => (
          <div key={evento.id} className="card-evento">
            <h3>{evento.nome}</h3>
            <p><strong>Data:</strong> {evento.data_evento}</p>
            <p><strong>Horário:</strong> {evento.horario}</p>
            <p><strong>Gênero:</strong> {evento.genero?.nome}</p>
            <p><strong>Cidade:</strong> {evento.cidade?.nome}</p>
            <p><strong>Endereço:</strong> {evento.endereco}, {evento.numero}</p>
            <p><strong>Descrição:</strong> {evento.descricao}</p>
          </div>
        ))
      )}
      <Rodape/>
    </div>
  );
}

export default FiltroEvento;
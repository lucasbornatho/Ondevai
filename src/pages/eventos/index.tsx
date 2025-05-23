import { useState, useEffect } from "react";
import { CardEventoType } from "../../types/cardeventotype";
import { api } from "../../api";
import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import Filtro from "../../components/filtro";
import CardEvento from "../../components/cardevento";
import CadastroHome from "../../components/cadastoHome";

function Eventos() {
  const [eventos, setEventos] = useState<CardEventoType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    carregarEventos();
  }, []);

  const carregarEventos = async () => {
    setLoading(true);
    try {
      const json = await api.CarregarTodosEventos();
      const dataArray = Array.isArray(json) ? json : [json];
      setEventos(dataArray);
    } catch (error) {
      console.error("Erro ao carregar os eventos:", error);
    }
    setLoading(false);
  };

  return (
    <div className="home">
      <Cabecalho />
      <Filtro />
      <div className="nome-pagina-eventos">
        <h1>Eventos</h1>
      </div>

      {loading ? (
        <p>Carregando eventos...</p>
      ) : eventos.length === 0 ? (
        <p>Nenhum evento encontrado.</p>
      ) : (
        <div className="lista-eventos">
          {eventos.map((evento) => (
            <CardEvento key={evento.id} {...evento} />
          ))}
        </div>
      )}

      <CadastroHome />
      <Rodape />
    </div>
  );
}

export default Eventos;

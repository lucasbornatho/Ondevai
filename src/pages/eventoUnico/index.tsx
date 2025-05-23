import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../api";
import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import CardEvento from "../../components/cardevento";
import { CardEventoType } from "../../types/cardeventotype";

function EventoUnico() {
  const { id } = useParams();
  const [evento, setEvento] = useState<CardEventoType | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      carregarEventoUnico(id);
    }
  }, [id]);

  const carregarEventoUnico = async (id: string) => {
    setLoading(true);
    try {
      const data = await api.CarregarEventoUnico(id);

      const eventoData = data.evento || data;

      const eventoCorrigido: CardEventoType = {
        id: eventoData.id,
        nome: eventoData.nome || 'sem nome',
        genero: eventoData.id_genero || 'sem gênero',
        data_evento: eventoData.data_evento || 'sem data',
        horario: eventoData.horario || 'sem horário',
        classificacao: eventoData.classificacao || 'sem classificação',
        descricao: eventoData.descricao || 'sem descrição',
        endereco: eventoData.endereco || 'sem endereço',
        numero: eventoData.numero || 'sem número',
        cidade: eventoData.id_cidade || 'sem cidade',
        image: eventoData.image || '',
      };

      setEvento(eventoCorrigido);
    } catch (error) {
      console.error("Erro ao carregar evento único:", error);
    }
    setLoading(false);
  };

  return (
    <div className='home'>
      <Cabecalho />
      <div className="nome-pagina-eventos">
        {loading && <p>Carregando evento...</p>}
        {!loading && evento && (
          <CardEvento {...evento} />
        )}
      </div>
      <Rodape />
    </div>
  );
}

export default EventoUnico;

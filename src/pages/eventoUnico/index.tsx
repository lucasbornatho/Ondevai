import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../api"
import Cabecalho from "../../components/cabecalho"
import Rodape from "../../components/rodape"
import CardEvento from "../../components/cardevento"
import { CardEventoType } from "../../types/cardeventotype"

function EventoUnico() {
    const { id } = useParams();
    const [evento, setEvento] = useState<CardEventoType | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (id) {
            carregarEvento(id);
        }
    }, [id]);

    const carregarEvento = async (id: string) => {
        setLoading(true);
        try {
            const data = await api.CarregarEventoUnico(id);
            setEvento(data);
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
                    <CardEvento 
                        nome={evento.nome}
                        image={evento.image}
                        endereco={evento.endereco}
                        genero={evento.genero}
                        descricao={evento.descricao}
                        data={evento.data}
                        horario={evento.horario}
                        classificacao={evento.classificacao}
                        numero={evento.numero}
                        cep={evento.cep}
                        cidade={evento.cidade}
                    />
                )}
            </div>
            <Rodape />
        </div>
    );
}

export default EventoUnico;

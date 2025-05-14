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
            CarregarEventoUnico(id);
        }
    }, [id]);

    const CarregarEventoUnico = async (id: string) => {
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
                    <CardEvento/>
                )}
            </div>
            <Rodape />
        </div>
    );
}

export default EventoUnico;

import Rodape from "../../components/rodape"
import Cabecalho from "../../components/cabecalho"
import CardEvento from "../../components/cardevento"
import Filtro from "../../components/filtro"
import { CardEventoType } from "../../types/cardeventotype"
import { useState, useEffect } from "react"
import { api } from "../../api"

function Eventos () {


    useEffect(() => { carregarEventos() }, []);


    const [eventos, setEventos] = useState<CardEventoType[]>([]);
    const[loading, setLoading] = useState(false);
 
    const carregarEventos = async () => {
        setLoading(true);
    
        try {
            let json = await api.CarregarTodosEventos();
            console.log(json);  // Apenas para verificar se está carregando os eventos
            
            const dataArray = Array.isArray(json) ? json : [json];
            setEventos(dataArray);
        } catch (error) {
            console.error("Erro ao carregar os eventos:", error);
        }
    
        setLoading(false);
    }

    return (
        <div className='home'>
            <Cabecalho />
            <Filtro />
            <div className='nome-pagina-eventos'>
                <h1>Eventos</h1>
            </div>
            {loading ? <p>Carregando...</p> : (
            <ul>
                {eventos.map(evento => (
                <li key={evento.id}>
                <CardEvento nome={evento.nome} image={evento.image} localizacao={evento.localizacao} />
                </li>
                ))}
            </ul>
)}
            <Rodape />
        </div>
    )
}

export default Eventos
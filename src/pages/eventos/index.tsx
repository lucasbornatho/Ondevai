import Rodape from "../../components/rodape"
import Cabecalho from "../../components/cabecalho"
import CardEvento from "../../components/cardevento"
import Filtro from "../../components/filtro"
import { CardEventoType } from "../../types/cardeventotype"
import { useState, useEffect } from "react"
import { api } from "../../api"

function Eventos () {


    useEffect(() => { carregarTodosEventos() }, []);


    const [eventos, setEventos] = useState<CardEventoType[]>([]);
    const[loading, setLoading] = useState(false);
 
    const carregarTodosEventos = async () => {
        setLoading(true)

        let json = await api.CarregarTodosEventos();

        const dataArray = Array.isArray(json) ? json : [json];
        setLoading(false);
        setEventos(dataArray);
    }

    return (
        <div className='home'>
            <Cabecalho />
            <Filtro />
            <div className='nome-pagina-eventos'>
                <h1>Eventos</h1>
            </div>
            <ul>
                {eventos.map(evento => 
                    <li key={evento.id}><CardEvento nome={evento.nome} image={evento.image} localizacao={evento.localizacao} /></li>
                )}
            </ul>
            <Rodape />
        </div>
    )
}

export default Eventos
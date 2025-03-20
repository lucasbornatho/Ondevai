import Rodape from "../../components/rodape"
import Cabecalho from "../../components/cabecalho"
import CardEvento from "../../components/cardevento"
import Filtro from "../../components/filtro"
import { CardEventoType } from "../../types/cardeventotype"
import { useState, useEffect } from "react"

function Eventos () {


    useEffect(() => { carregarEventos() }, []);


    const [eventos, SetEventos] = useState<CardEventoType[]>([]);
 
    const carregarEventos = () => {
        fetch('https://67db6c491fd9e43fe4747f36.mockapi.io/eventos/v1/Ecventos')
        .then((response) => {
            return response.json();
        })
 
        .then((json) => {
            SetEventos(json);
        })
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
                    <li key={evento.id}><CardEvento title={evento.title} image={evento.image} /></li>
                )}
            </ul>
            <Rodape />
        </div>
    )
}

export default Eventos
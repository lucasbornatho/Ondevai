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
        fetch('http://localhost:3000/eventos')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Erro HTTP! status: ${response.status}`);
                }
                return response.json();
            })
            .then((json) => {
                SetEventos(json);
            })
            .catch((error) => {
                console.error("Erro ao carregar eventos:", error);
            });
    };

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
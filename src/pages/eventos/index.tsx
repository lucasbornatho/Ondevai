import Rodape from "../../components/rodape"
import Cabecalho from "../../components/cabecalho"
import CardEvento from "../../components/cardevento"
import Filtro from "../../components/filtro"

function Eventos () {

    const eventos = [{ id: 1, titulo: "Os caras malvados", imgUrl: "/capa-evento/ImagemCapaEvento.png" },
    { id: 2, titulo: "Os caras muito malvados", imgUrl: "/capa-evento/ImagemCapaEvento.png" },
    { id: 3, titulo: "Os caras muito muito malvados", imgUrl: "/capa-evento/ImagemCapaEvento.png" },
    { id: 4, titulo: "Os caras malvadosssssssssssss", imgUrl: "/capa-evento/ImagemCapaEvento.png" }];

    return (
        <div className='home'>
            <Cabecalho />
            <Filtro />
            <div className='nome-pagina-eventos'>
                <h1>Eventos</h1>
            </div>
            <ul>
                {eventos.map(evento => 
                <li key={evento.id}><CardEvento titulo={evento.titulo} imgUrl={evento.imgUrl} /></li>
                )}
            </ul>
            <Rodape />
        </div>
    )
}

export default Eventos
import Rodape from "../../components/rodape"
import Cabecalho from "../../components/cabecalho"
import CardEvento from "../../components/cardevento"
import Filtro from "../../components/filtro"

function Eventos () {
    return (
        <div className='home'>
            <Cabecalho />
            <Filtro />
            <div className="nome-pagina-eventos">
                <h1>Eventos</h1>
            </div>
            <CardEvento />
            <CardEvento />
            <CardEvento />
            <CardEvento />
            <Rodape />
        </div>
    )
}

export default Eventos
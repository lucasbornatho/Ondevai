import Rodape from "../../components/rodape"
import Cabecalho from "../../components/cabecalho"
import CardEvento from "../../components/cardevento"
import Filtro from "../../components/filtro"

function Home () {
    return (
        <div className='home'>
            <Cabecalho />
            <Filtro />
            <CardEvento />
            <CardEvento />
            <CardEvento />
            <CardEvento />
            <Rodape />
        </div>
    )
}

export default Home
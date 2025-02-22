import Rodape from "../../components/rodape"
import Cabecalho from "../../components/cabecalho"
import CardEvento from "../../components/cardevento"

function Home () {
    return (
        <div className='home'>
            <Cabecalho />
            <CardEvento />
            <CardEvento />
            <Rodape />
        </div>
    )
}

export default Home
import Rodape from "../../components/rodape"
import Cabecalho from "../../components/cabecalho"
import CardEvento from "../../components/cardevento"

function Home () {
    return (
        <div className='home'>
            <Cabecalho />
            <br />
            <CardEvento />
            <br />
            <CardEvento />
            <br />
            <CardEvento />
            <br />
            <CardEvento />
            <br />
            <Rodape />
        </div>
    )
}

export default Home
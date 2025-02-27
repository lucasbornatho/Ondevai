import Rodape from "../../components/rodape"
import Cabecalho from "../../components/cabecalho"


function Home () {
    return (
        <div className='home'>
            <Cabecalho />
            <h1>Esta é a home</h1>
            <Rodape />
        </div>
    )
}

export default Home
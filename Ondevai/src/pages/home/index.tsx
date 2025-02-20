import Rodape from "../../components/rodape"
import Cabecalho from "../../components/cabecalho"

function Home () {
    return (
        <div className='home'>
            <Cabecalho  titulo='home'  
                      pagina='home' 
                      parametro='home' />
            <Rodape />
        </div>
    )
}

export default Home
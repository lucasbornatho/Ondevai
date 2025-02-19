import Rodape from "../rodape"
import Cabecalho from "../cabecalho"
import Menu from "../menu"

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
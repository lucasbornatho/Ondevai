import Rodape from "../../components/rodape"
import Cabecalho from "../../components/cabecalho"


function Home () {
    return (
        <div className='home'>
            <Cabecalho />
            <div className="home-netflix">
                <div className="home-div1-netflix"></div>
            </div>
            <Rodape />
        </div>
    )
}

export default Home
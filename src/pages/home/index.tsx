import Rodape from "../../components/rodape"
import Cabecalho from "../../components/cabecalho"
import CardHome from "../../components/cardhome"
import DropHome from "../../components/drophome/drophome"
import InfosHome from "../../components/infoshome"

function Home () {
    return (
        <div className='home'>
            <Cabecalho />
            <CardHome/>
            <DropHome />
            <InfosHome/>
            <Rodape />
        </div>
    )
}

export default Home
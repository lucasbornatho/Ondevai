import Rodape from "../../components/rodape"
import Cabecalho from "../../components/cabecalho"
import CardHome from "../../components/cardhome"
import DropHome from "../../components/drophome/drophome"
import SobreNos from "../../components/sobrenos/sobrenos"

function Home () {
    return (
        <div className='home'>
            <Cabecalho />
            <CardHome/>
            <DropHome />
            <SobreNos/>
            <Rodape />
        </div>
    )
}

export default Home
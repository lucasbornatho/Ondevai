import Rodape from "../../components/rodape"
import Cabecalho from "../../components/cabecalho"
import CardHome from "../../components/cardhome"
import InfosHome from "../../components/infoshome"

function Home () {
    return (
        <div className='home'>
            <Cabecalho />
            <CardHome/>
            {/* <CardHome imgUrl='/Rock.jpg' evento='Rock'/>
            <CardHome imgUrl='/Samba.jpg' evento='Samba'/>
            <CardHome imgUrl='/Teatro.jpg' evento='Teatro'/> */}
            <InfosHome />
            <Rodape />
        </div>
    )
}

export default Home
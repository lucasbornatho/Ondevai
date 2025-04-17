import Rodape from "../../components/rodape"
import Cabecalho from "../../components/cabecalho"
import CardHome from "../../components/cardhome"
import DropHome from "../../components/drophome/drophome"

function Home () {
    return (
        <div className='home'>
            <Cabecalho />
            <CardHome/>
            {/* <CardHome imgUrl='/Rock.jpg' evento='Rock'/>
            <CardHome imgUrl='/Samba.jpg' evento='Samba'/>
            <CardHome imgUrl='/Teatro.jpg' evento='Teatro'/> */}
            <DropHome />
            <Rodape />
        </div>
    )
}

export default Home
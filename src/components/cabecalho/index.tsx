import '../../estilo/estilo.css'
import BotaoLogin from '../botaologin'
import Menu from '../menu'

function Cabecalho () {

    return (
        <div>
            <div className='cabecalho'>

                <div className='cabecalho-item'>
                    <div className='logo-home'>
                        <img src='./Logonovo.png' alt='Logo' />
                    </div>

                    <div>
                        <Menu />
                    </div>

                    <div className="cabecalho-login">
                        <BotaoLogin />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Cabecalho
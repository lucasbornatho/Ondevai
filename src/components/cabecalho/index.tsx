import { useContext } from 'react';
import '../../estilo/estilo.css'
import BotaoLogin from '../botaologin'
import Menu from '../menu'
import { UsuarioLogadoContext } from '../../contexts/contextAuth';
import AreaLogin from '../arealogada';

function Cabecalho () {

    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

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
                        {UsuarioLogadoCtx?.userLoggedIn ? (<AreaLogin />) : (<BotaoLogin />)}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Cabecalho
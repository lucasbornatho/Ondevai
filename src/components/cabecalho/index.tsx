import { useContext } from 'react';
import '../../estilo/estilo.css'
import BotaoLogin from '../botaologin'
import Menu from '../menu'
import { UsuarioLogadoContext } from '../../contexts/contextAuth';
import AreaLogin from '../arealogada';
import { Link } from 'react-router-dom';

function Cabecalho () {

    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

    function alterarContext () {
        UsuarioLogadoCtx?.setName('teste');

    }

    return (
        <div>
            <div className='cabecalho'>

                <div className='cabecalho-item'>
                    <Link to="/">
                    <div className='logo-home'>
                        <img src='./Logonovo.png' alt='Logo' />
                    </div>
                    </Link>
                    <div>
                        <Menu />
                    </div>
                    <div className="cabecalho-login">
                       
                        {UsuarioLogadoCtx?.name}
                        {UsuarioLogadoCtx?.name && (<AreaLogin />)}
                        {!UsuarioLogadoCtx?.name && (<BotaoLogin />)}
                   
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Cabecalho
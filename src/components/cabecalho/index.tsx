import '../../estilo/estilo.css'
import Menu from '../menu'

// type Informacoes = {
//     titulo?: string;
//     pagina?: string;
//     parametro?: string;
// }

function Cabecalho () {

    return (
        <div>
            <div className='cabecalho'>
                <div className='logo-home'>
                    <img src='./Logonovo.png' alt='Logo' />
                </div>
                    <Menu />
                <div className="cabecalho-login">
                    <img src="login.png" alt="Login" />
                </div>
            </div>
        </div>
    )
}

export default Cabecalho
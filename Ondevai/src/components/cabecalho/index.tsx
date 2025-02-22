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
                    <img src='./Logo.png' alt='Logo' />
                </div>
                    <Menu />
            </div>
        </div>
    )
}

export default Cabecalho
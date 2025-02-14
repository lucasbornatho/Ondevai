import '../estilo.css'
import Menu from './menu'

function Cabecalho () {
    return (
        <div className='cabecalho'>
            <div className='logo-home'>
                <img src='./Logo.png' alt='Logo' />
            </div>
                <Menu />
        </div>
    )
}

export default Cabecalho
import '../estilo.css'
import { Link } from "react-router-dom"

function Menu () {
    return (
        <div className='menu-principal'>
            <div className="menu-botao">
                <Link to='/' className='link-botao-menu'> Home </Link>
            </div>
            <div className="menu-botao">
                <Link to='/eventos' className='link-botao-menu'> Eventos </Link>
            </div>
            <div className="menu-botao">
                <Link to='/sobre' className='link-botao-menu'> Sobre </Link>
            </div>
        </div>
    )
}

export default Menu
import '../../estilo.css'
import Menu from '../menu'

type Informacoes = {
    titulo: string;
    pagina: string;
    parametro: string;
}

function Cabecalho (props: Informacoes) {

    return (
        <div>
            <div className='cabecalho'>
                <div className='logo-home'>
                    <img src='./Logo.png' alt='Logo' />
                </div>
                    <Menu />
            </div>
            <div>
                    <p>Titulo = {props.titulo};</p>
                    <p>Pagina = {props.titulo};</p>
                    <p>Parametro = {props.parametro};</p>
            </div>
        </div>
    )
}

export default Cabecalho
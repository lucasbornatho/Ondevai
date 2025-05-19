import { Link } from "react-router-dom";

function CadastroHome() {
    return (
        <div className="infos-menu">

            <div className="menu-cadastrar-evento">
                <div className="menu-cadastrar-caixa">
                    <h2>Quer Cadastrar seu Evento?</h2>
                    <p>Clique abaixo e preencha as informações</p>
                    <Link to="/cadastroevento" className="loginbotaocadastro">
                    <button>Cadastrar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CadastroHome;
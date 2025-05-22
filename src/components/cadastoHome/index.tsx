import { Link } from "react-router-dom";

function CadastroHome() {
    return (
        <div className="infos-menu">

            <div className="menu-cadastrar-evento">
                <div className="menu-cadastrar-caixa">
                    <h2>Cadastre seu evento</h2>
                    <p>Preencha as informações clicando no botão abaixo.</p>
                    <a className="loginbotaocadastro" href="./cadastroevento">
                        <button>Começar cadastro</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CadastroHome;

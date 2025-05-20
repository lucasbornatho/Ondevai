function RecuperarSenha(){

    return(
        <div>
            <div>
                <div>
                    <h1><strong>Onde Vai</strong></h1>
                    <h2>Recuperação de senha</h2>
                    <p>Informe seu email e crie uma nova senha para acessar</p>
                </div>

                <div>
                    <div>
                        <label>Email</label>
                        <input type="email"  placeholder="seuemail@gmail.com"/>
                    </div>

                    <div>
                        <div>
                            <label>Nova Senha</label>
                            <input type="password"  placeholder="Digite sua nova senha"/>
                        </div>

                        <div>
                            <label>Confirmar Senha</label>
                            <input type="password"  placeholder="Confirme sua nova senha"/>
                        </div>
                    </div>

                    <button>Redefinir Senha</button>

                    <a href="./">Voltar para Home</a>
                </div>

            </div>
        </div>
    )
}

export default RecuperarSenha
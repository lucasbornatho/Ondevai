function CadastroEvento(){

    return(
        <>
            <div className="container-cadastro-evento">
                
                <h1 className="texto-cetralizado">Cadastro Evento</h1>

                <div className="cadastro-evento-body">

                    <form action="">
                        <div className="container-dados-evento">
                            <h2>Dados Evento</h2>
                            <div className="container-item">
                                <div className="container-grupo">
                                    <label>Nome Evento</label>
                                    <input type="text" />
                                </div>
                                <div className="container-grupo">
                                    <label>Genero</label>
                                    <input type="text" />
                                </div>
                            </div> 
                        </div> 

                        <div className="container-localizacao">
                            <h2>Localização</h2>
                            <div className="container-item">
                                <div className="container-grupo">
                                    <label>Endereço</label>
                                    <input type="text" />
                                </div>

                                <div className="container-grupo">
                                    <label htmlFor="">Numero</label>
                                    <input type="text" />
                                </div>

                                <div className="container-grupo">
                                    <label htmlFor="">CEP</label>
                                    <input type="text" />
                                </div>

                                <div className="container-grupo">
                                    <label htmlFor="">Cidade</label>
                                    <input type="text" />
                                </div>
                            </div> 
                        </div> 

                        <div className="container-descricao-evento">
                            <h2>Descrição Evento</h2>
                            <div className="container-item tamanho-input">
                                <input type="text"/>
                            </div>
                        </div>

                        <div className="container-imagem-capa-evento">
                            <h2>Imagem Capa Evento</h2>
                            <div className="container-item file">
                                <input type="file"/>
                                <p>Imagem maxima 1140px X 813px</p>
                            </div>
                    
                        </div>
                    </form>
                </div>

                <div className="botao-cadastrar-eventro">
                    <button>Cadastrar Evento</button>
                </div>
            </div>
        </>
    )
}

export default CadastroEvento
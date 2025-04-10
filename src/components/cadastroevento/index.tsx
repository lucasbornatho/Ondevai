function CadastroEvento(){

    return(
        <>
            <div className="container-cadastro-evento">
                <h1 className="texto-cetralizado">Cadastro Evento</h1>

                <div className="cadastro-evento-body">
                    <div className="container-dados-evento">
                        <h2>Dados Evento</h2>
                        <div className="container-item">
                            <div className="container-grupo">
                                <label>Nome Evento</label>
                                <input type="text" />
                            </div>
                            <div className="container-grupo">
                                <label>Genero</label>
                                <select className="seletor">
                                    <option value="1">Rock</option>
                                    <option value="2">Teatro</option>
                                    <option value="3">Bares</option>
                                    <option value="4">Restaurantes</option>
                                    <option value="5">Festas</option>
                                    <option value="6">Shows</option>
                                </select>
                            </div>
                            <div className="container-grupo">
                                <label>Data Evento</label>
                                <input type="date" />
                            </div>
                            <div className="container-grupo">
                                <label>Horário Evento</label>
                                <input type="time" />
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
                                <label>Numero</label>
                                <input type="text" />
                            </div>

                            <div className="container-grupo">
                                <label>CEP</label>
                                <input type="text" />
                            </div>

                            <div className="container-grupo">
                                <label>Cidade</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    <div className="container-descricao-evento">
                        <h2>Descrição Evento</h2>
                        <div className="container-item tamanho-input">
                            <textarea></textarea>
                        </div>
                    </div>

                    <div className="container-imagem-capa-evento">
                        <h2>Imagem Capa Evento</h2>
                        <div className="container-item file">
                            <label htmlFor="input-arquivo">
                                <img src="/carregar-arquivo.png" alt="carregamento" />
                            </label>
                            <input
                                id="input-arquivo"
                                className="input-arquivo"
                                type="file"
                                style={{ display: 'none' }}
                            />
                            <p>Imagem máxima 1140px X 813px</p>
                        </div>
                    </div>
                </div>

                <div className="botao-cadastrar-eventro">
                    <button>Cadastrar Evento</button>
                </div>
            </div>
    
        </>
    )
}

export default CadastroEvento
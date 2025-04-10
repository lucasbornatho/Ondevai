import { useState } from "react";
import { api } from "../../api";
import { CardEventoType } from "../../types/cardeventotype";

const [eventos, setEventos] = useState<CardEventoType[]>([]);

function CadastroEvento(){

    const handleAddClick = async (id: string, nome: string, genero: string, data: string, horario: string, descricao: string, localizacao: string, image: string) => {
        
        let json = await api.AdicionarEventos(id, nome, genero, data, horario, descricao, localizacao, image);

        if(json.id){
            alert('Evento adicionado com sucesso')
            setEventos((eventos: any) => [...eventos, json]);
        } else {
            alert('Falha ao adicionar Evento')
        }
    }

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
                                <textarea name="" id=""> </textarea>
                            </div>
                        </div>

                        <div className="container-imagem-capa-evento">
                            <h2>Imagem Capa Evento</h2>
                            <div className="container-item file">
                                <label htmlFor="input-arquivo">
                                    <img src='/carregar-arquivo.png' alt='carregamento' />
                                </label>
                                <input id="input-arquivo" className="input-arquivo" type="file" style={{ display: 'none' }} />
                                <p>Imagem máxima 1140px X 813px</p>
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
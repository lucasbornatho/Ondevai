function CadastroEvento(){
    return(
        <div className="Container-CadastroEvento">
        <br />
       <h1 className="texto-cetralizado">Dados Evento</h1>
       <h2>Dados Evento</h2> 
            <div className="PaiNomeEvento-Genero">
                
                <div className="FilhoNomeEvento">Nome Evento </div>
                <div className="FilhoGeneroEvento">Genero  </div>
                </div>
                <br />


                <h2>Localização</h2>
            <div className="PaiLocalizacao"> 
                 <div className="LocalizacaoFilho">Endereço </div>
                 <div className="LocalizacaoFilho">Numero </div>
                 <div className="LocalizacaoFilho">CEP</div>
                 <div className="LocalizacaoFilho">Cidade</div>
            </div>
            <br/>
            
          <div className="DescricaoEvento">Descrição Evento
            <div className="TextoDescrição"></div>
             </div>
             <br />
             <div className="Imagem-Capa-Evento">Imagem Capa Evento
            <div className="imagemevento"  > 
              
            </div>
            Imagem Maxima 1140px X813px
             </div>
             <br />

          <div className="botaocadastro">
          <h1 className="texto-cetralizado">Cadastre Evento</h1>
              </div>



        </div>
        
    )
}

export default CadastroEvento
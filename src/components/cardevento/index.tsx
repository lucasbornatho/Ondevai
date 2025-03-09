function CardEvento() {
    return(
        <div className='card-evento'>

            <div className="capa-evento">
                <img src="/capa-evento/ImagemCapaEvento.png" alt="Capa Do evento" />
            </div>

            <div className="evento-informacoes">
                <div className="evento-icones">
                    <img src="/capa-evento-icones/classificacao livre.png" alt="Livre" />
                    <img src="/capa-evento-icones/compartilhar.png" alt="Compartilhar" />
                    <img src="/capa-evento-icones/favoritar.png" alt="Favoritar" />
                    <img src="/capa-evento-icones/evento curtir.png" alt="Curtir" />
                </div>
                
                <h1>Os Caras Malvados</h1>
            </div>

            <div className="evento-saiba-mais">
                <button>Saiba Mais</button>
            </div>
            {/* <div>
                <img src='evento.jpg' alt='imagem de evento'></img>
            </div>
            <div>
                <h1>EVENTO</h1>
                <p>LOCAL</p>
            </div>
            <div>
                <p>DATA</p>
                <p>HORA</p>
                <p>ENDEREÇO</p>
            </div>
            <div>

            </div>
            <div>
                <button>MAIS INFORMAÇOES</button>
            </div> */}
        </div>
    )
}

export default CardEvento
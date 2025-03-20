import { CardEventoType } from "../../types/cardeventotype"

function CardEvento({id, title,image, description} : CardEventoType) {
    
    return(
        <div className='card-evento'>

            <div className="capa-evento">
                <img src={image} alt="Capa Do evento" />
            </div>

            <div className="evento-informacoes">
                <div className="evento-icones">
                    <img src="/capa-evento-icones/classificacao livre.png" alt="Livre" />
                    <img src="/capa-evento-icones/compartilhar.png" alt="Compartilhar" />
                    <img src="/capa-evento-icones/favoritar.png" alt="Favoritar" />
                    <img src="/capa-evento-icones/evento curtir.png" alt="Curtir" />
                </div>
                
                <h1>{title}</h1>
            </div>

            <div className="evento-saiba-mais">
                <button>Saiba Mais</button>
            </div>
            
        </div>
    )
}

export default CardEvento
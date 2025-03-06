type CardHomeProps = {
    imgUrl: string;
    evento: string;
}

function CardHome ({imgUrl, evento } : CardHomeProps) {
    return(
        <div>
            <img src={imgUrl} alt={evento}></img>
            <div>
                <p>{evento}</p>
            </div>
        </div>
    )
}

export default CardHome
// type CardHomeProps = {
//     imgUrl: string;
//     evento: string;
// }
// function CardHome ({imgUrl, evento } : CardHomeProps)

function CardHome () {
    return(
        <div>
            <div className="menu-netflix">

                <div className="netflix-menu-card">
                    <a href="./"><img src="./Rock.jpg" alt="" /></a>
                    <a href="./"><img src="./Samba.jpg" alt="" /></a>
                    <a href="./"><img src="./Teatro.jpg" alt="" /></a>
                </div>

                {/* <div className="menu-netflix-cards">
                    <img src={imgUrl} alt={evento}></img>
                    <div>
                        <p>{evento}</p>
                    </div>
                </div> */}
            </div>
            
            <div className="texto-menu">
                    <img src="./OndeVai Texto.png" alt="" />
            </div>

            <div className="menu-cadastrar-evento">
                <div className="menu-cadastrar-caixa">
                    <h2>Quer Cadastrar seu Evento?</h2>
                    <p>Clique abaixo e preencha as informações</p>
                    <button>Cadastrar</button>
                </div>
            </div>
        </div>
    )
}

export default CardHome
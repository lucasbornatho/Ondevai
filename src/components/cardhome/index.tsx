// type CardHomeProps = {
//     imgUrl: string;
//     evento: string;
// }
// function CardHome ({imgUrl, evento } : CardHomeProps)

// import Carousel from 'react-elastic-carousel';


// const breakpoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 550, itemsToShow: 2 },
//     { width: 768, itemsToShow: 3 },
//     { width: 1200, itemsToShow: 3 }
// ];

// function CardHome() {
//     return (
//         <div>
//             <div className="menu-netflix">
//                 <Carousel breakPoints={breakpoints} loop={true} enableAutoPlay={true} autoPlaySpeed={2000}>
//                     <a href="./"><img src="./banner/Eletronica.png" alt="Eletronica" /></a>
//                     <a href="./"><img src="./banner/hip hop.png" alt="Hip Hop" /></a>
//                     <a href="./"><img src="./banner/Rock.png" alt="Rock" /></a>
//                     <a href="./"><img src="./banner/Samba.png" alt="Samba" /></a>
//                     <a href="./"><img src="./banner/Teatro.png" alt="Teatro" /></a>
//                     <a href="./"><img src="./banner/Bares.png" alt="Bares" /></a>
//                 </Carousel>
//             </div>
//         </div>
//     );
// }

// export default CardHome;

function CardHome () {
    return(
        <div>
            <div className="menu-netflix">

                <div className="netflix-menu-card">
                    <a href="./"><img src="./banner/Eletronica.png" alt="" /></a>
                    <a href="./"><img src="./banner/hip hop.png" alt="" /></a>
                    <a href="./"><img src="./banner/Rock.png" alt="" /></a>
                    <a href="./"><img src="./banner/Samba.png" alt="" /></a>
                    <a href="./"><img src="./banner/Teatro.png" alt="" /></a>
                    <a href="./"><img src="./banner/Bares.png" alt="" /></a>
                </div>

                {/* <div className="menu-netflix-cards">
                    <img src={imgUrl} alt={evento}></img>
                    <div>
                        <p>{evento}</p>
                    </div>
                </div> */}
            </div>
        
        </div>
    )
}

export default CardHome
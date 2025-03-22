import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type CardHomeProps = {
    imgUrl: string;
    evento: string;
}

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
function CardHome() {
    return (
        <div>
            <div className="menu-netflix">
                <Carousel  swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px">
                    
                      <a href="./"><img src="./banner/Eletronica.png" alt="Eletronica" /></a>
                      <a href="./"><img src="./banner/hip hop.png" alt="Hip Hop" /></a>
                      <a href="./"><img src="./banner/Rock.png" alt="Rock" /></a>
                      <a href="./"><img src="./banner/Samba.png" alt="Samba" /></a>
                      <a href="./"><img src="./banner/Teatro.png" alt="Teatro" /></a>
                      <a href="./"><img src="./banner/Bares.png" alt="Bares" /></a>
                    
                    
                </Carousel>
            </div>
        </div>
    );
}

export default CardHome;

// function CardHome () {
//     return(
//         <div>
//             <div className="menu-netflix">

//                 <div className="netflix-menu-card">
//                     <a href="./"><img src="./banner/Eletronica.png" alt="" /></a>
//                     <a href="./"><img src="./banner/hip hop.png" alt="" /></a>
//                     <a href="./"><img src="./banner/Rock.png" alt="" /></a>
//                     <a href="./"><img src="./banner/Samba.png" alt="" /></a>
//                     <a href="./"><img src="./banner/Teatro.png" alt="" /></a>
//                     <a href="./"><img src="./banner/Bares.png" alt="" /></a>
//                 </div>

//                 {/* <div className="menu-netflix-cards">
//                     <img src={imgUrl} alt={evento}></img>
//                     <div>
//                         <p>{evento}</p>
//                     </div>
//                 </div> */}
//             </div>
        
//         </div>
//     )
// }

// export default CardHome
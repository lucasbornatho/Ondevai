import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Evento {
  nome: string;
  imgUrl: string;
  link: string;
}

const eventos: Evento[] = [
    { nome: "Shows", imgUrl: "./banner/Show.png", link: "/eventos" },
    { nome: "Bares", imgUrl: "./banner/Bares Restaurantes.png", link: "/eventos" },
    { nome: "Festas", imgUrl: "./banner/Festas.png", link: "/eventos" },
    { nome: "Teatro", imgUrl: "./banner/Teatro.png", link: "/eventos" },
    { nome: "Passeios", imgUrl: "./banner/Passeios.png", link: "/eventos" },
    
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const CardHome: React.FC = () => {
  return (
    <div className="menu-netflix">
      <Carousel
        swipeable
        draggable
        showDots
        responsive={responsive}
        ssr
        infinite
        autoPlaySpeed={1000}
        keyBoardControl
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {eventos.map((evento) => (
          <a key={evento.nome} href={evento.link} target="_blank" rel="noopener noreferrer">
            <img src={evento.imgUrl} alt={evento.nome} />
          </a>
        ))}
      </Carousel>
    </div>
  );
};

export default CardHome
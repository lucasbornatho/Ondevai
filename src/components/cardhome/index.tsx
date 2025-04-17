import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleClick = (link: string) => {
    navigate(link);
  };

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
          <div
            key={evento.nome}
            onClick={() => handleClick(evento.link)}
            style={{ cursor: "pointer" }}
          >
            <img src={evento.imgUrl} alt={evento.nome} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardHome;

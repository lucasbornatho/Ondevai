import { Calendar, MapPin, Music, Users } from "lucide-react"
import "../../estilo/estilo.css"

function SobreNos() {
  return (
    <section className="sobre-nos-section">
      <div className="container">
        <div className="header">
          <div className="header-content">
            <h2 className="title">Sobre Nós</h2>
            <p className="subtitle">Conectando você aos melhores eventos da sua cidade</p>
          </div>
        </div>
        <div className="content">
          <div className="mission">
            <h3 className="mission-title">Nossa Missão</h3>
            <p className="mission-text">
              Nascemos com um propósito claro: facilitar a descoberta de eventos locais que combinam com seu estilo e
              preferências. Acreditamos que experiências incríveis estão acontecendo perto de você, e nossa plataforma é
              a ponte que conecta pessoas a momentos inesquecíveis.
            </p>
            <div className="features">
              <div className="feature-card">
                <Music className="icon" />
                <h4 className="feature-title">Diversidade</h4>
                <p className="feature-text">Shows de todos os gêneros musicais</p>
              </div>
              <div className="feature-card">
                <Calendar className="icon" />
                <h4 className="feature-title">Atualizado</h4>
                <p className="feature-text">Eventos novos todos os dias</p>
              </div>
              <div className="feature-card">
                <MapPin className="icon" />
                <h4 className="feature-title">Local</h4>
                <p className="feature-text">Encontre eventos perto de você</p>
              </div>
              <div className="feature-card">
                <Users className="icon" />
                <h4 className="feature-title">Personalizado</h4>
                <p className="feature-text">Descubra eventos com base nos seus interesses</p>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img
              src="./galerafullstack.png"
              alt=""
              className="main-image"
            />
            <div className="image-overlay">
              <div className="overlay-text">
               
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <h2 className="since">Desde 2025
        <p>Conectando pessoas a experiências inesquecíveis</p>
        </h2>
      </div>
    </section>
  )
}

export default SobreNos

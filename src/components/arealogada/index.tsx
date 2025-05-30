import { useContext, useState } from "react";
import {
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody
} from "reactstrap";
import { UsuarioLogadoContext } from "../../contexts/contextAuth";
import { useNavigate, useParams } from "react-router-dom";
import { CardEventoType } from "../../types/cardeventotype";
import { api } from "../../api";

function AreaLogin() {

  const carregarEventoUnico = async (id: string) => {
    
      const data = await api.CarregarEventoUnico(id);

      const eventoData = data.evento || data;

      const eventoCorrigido: CardEventoType = {
        id: eventoData.id,
        nome: eventoData.nome || 'sem nome',
        generoNome: eventoData.generoNome || 'sem gênero',
        data_evento: eventoData.data_evento || 'sem data',
        horario: eventoData.horario || 'sem horário',
        classificacao: eventoData.classificacao || 'sem classificação',
        descricao: eventoData.descricao || 'sem descrição',
        endereco: eventoData.endereco || 'sem endereço',
        numero: eventoData.numero || 'sem número',
        cidade: eventoData.id_cidade || 'sem cidade',
        image: eventoData.image || '',
        cidadeNome: ""
      };
  };

  const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);
  const navigate = useNavigate();

  function logoff() {
  if (UsuarioLogadoCtx) {
    UsuarioLogadoCtx.setName('');
    UsuarioLogadoCtx.setID('');
  }
  navigate('/');
}

  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button
        color="primary"
        onClick={toggleOffcanvas}
        style={{
          backgroundImage: "url('/Icone Login.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
          width: "60px",
          height: "60px",
          padding: 0,
          minWidth: 0,
        }}
      >
      </Button>
      <Offcanvas isOpen={isOpen} toggle={toggleOffcanvas} direction="end" style={{backgroundColor: "#D39643"}}>
        <OffcanvasHeader toggle={toggleOffcanvas} style={{marginTop: "1rem",
          color: "white"}}>
          <p style={{fontSize: "1.5rem"}}>Olá {UsuarioLogadoCtx?.name}</p>
        </OffcanvasHeader>
        <OffcanvasBody style={{
          padding: "1rem",
          fontSize: "1.6rem"
        }}>
          <div style={{
            height: "70vh"
          }}>
            <h3 style={{color:"whitesmoke"}}>Meus Eventos Criados</h3>
          </div>

          <div style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            padding: "1rem",
            gap: "2rem"
          }}>
            <button onClick={logoff} style={{
              width: "140px",
              borderRadius: "14px",
              color: "white",
              backgroundColor: "#3B4077",
            }}>Sair</button>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}

export default AreaLogin;

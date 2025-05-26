import React, { useContext, useEffect, useState } from 'react';
import { Collapse, Button, CardBody, Card, CollapseProps } from 'reactstrap';
import { JSX } from 'react/jsx-runtime';
import CadastroHome from '../cadastoHome';
import { UsuarioLogadoContext } from '../../contexts/contextAuth';


function DropHome(args: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Collapse> & Readonly<CollapseProps>) {
  const [isOpen, setIsOpen] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);
  
  const toggle = () => {
    if (!UsuarioLogadoCtx?.name) {
      window.alert("Você precisa estar logado para criar um evento!");
      return;
    }
    setIsOpen(!isOpen);
  };
  return (
    <React.StrictMode>
      <Button color="" onClick={toggle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}  style={{ 
            margin: '1rem',
            backgroundColor: isHovered ? '#3b3f6b' : '#262A56',
            color: '#fff',
            fontSize: '1.7rem',
            padding: '1rem 2rem',
            borderRadius: '12px',
            textAlign: 'center',
            cursor: 'pointer',
            display: 'inline-block',
            textDecoration: 'none',
            transition: 'background-color 0.3s ease-in-out',}}>
        <div className='drop-home'>Quer cadastrar o seu evento?</div>
      </Button>
      <Collapse isOpen={isOpen} {...args}>
        <Card>
          <CardBody>
            <CadastroHome/>
          </CardBody>
        </Card>
      </Collapse>
    </React.StrictMode>
  );
}

export default DropHome;
function Filtro() {
    return (
      <div className="container-filtro">
        <div className="filtro-botao">
          <p>A - Z</p>
                {/* <Link to='/' className='link-botao-menu'> Home </Link> */}
        </div>
        <div className="filtro-botao">
          <p>Data</p>
                {/* <Link to='/eventos' className='link-botao-menu'> Eventos </Link> */}
        </div>
        <div className="filtro-botao">
          <p>Genero</p>
                {/* <Link to='/sobre' className='link-botao-menu'> Sobre </Link> */}
        </div>
        <div className="filtro-botao">
          <p>Cidade</p>
                {/* <Link to='/sobre' className='link-botao-menu'> Sobre </Link> */}
        </div>
      </div>
    );
}

export default Filtro;
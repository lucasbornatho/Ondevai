import { useNavigate } from "react-router-dom";

function NotFound () {

    const navegacao = useNavigate();

    function HandleBack(){
        navegacao('/');
    }

    return (
        <div className='not-found'>
            <img src="./404.webp" alt="404-img" />
            <p>Pagina não encontrada!</p>
            <button onClick={HandleBack}> Home </button>
        </div>
    )
}

export default NotFound
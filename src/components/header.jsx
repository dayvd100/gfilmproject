import './header.css';
import { Link } from 'react-router-dom';
import ModalRegisterProduct from "../components/modalRegisterProduct";
import { useState } from 'react';

function Header(){
    const [modalOnScreen, setModalOnScreen] = useState(false);

    const showModalOnScreen = () => {
        setModalOnScreen(true);
    }

    const hiddenModalOnScreen = () =>{
        setModalOnScreen(false)
    }

    return(
        <header>
            <p className="gfilm-header-title">Gfilm</p>
            <ul className='list-options-navigate'>
                <Link to='/' className='link-pages-header'><li>Produtos</li></Link>
                <Link to='tarefas' className='link-pages-header'><li>Tarefas</li></Link>  
            </ul>
            <button className="new-product" onClick={showModalOnScreen}>Cadastrar produto</button> 
            {modalOnScreen ? <ModalRegisterProduct/> : null}
            {modalOnScreen ? <p className="x-for-close" onClick={hiddenModalOnScreen}>x</p> : null}
            
        </header>
    )
}
export default Header;
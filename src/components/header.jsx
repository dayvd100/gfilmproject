import './header.css';
import { Link } from 'react-router-dom';

function Header(){

    return(
        <header>
            <p className="gfilm-header-title">Gfilm</p>
            <ul className='list-options-navigate'>
                <Link to='/' className='link-pages-header'><li>Produtos</li></Link>
                <Link to='tarefas' className='link-pages-header'><li>Tarefas</li></Link>
            </ul>
        </header>
    )

}

export default Header;
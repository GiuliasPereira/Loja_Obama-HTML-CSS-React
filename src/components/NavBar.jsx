import './NavBar.css'
import Twitter from '../assets/icon-twitter50.svg'
import Facebook from '../assets/icon-facebook.svg'
import Google from '../assets/icon-google.svg'
import { Link } from 'react-router-dom'

function NavBar(){
    return(
    <nav className='menu'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/contatos">Contatos</Link></li>
        </ul>
        <div className='social-icons'>
        <a href="http://www.facebook.com" className="btn-facebook">
            <img className='btn' src={Facebook} alt="" />
        </a>
        <a href="https://twitter.com/loja_infobama" className="btn-twitter">
            <img className='btn' src={Twitter} alt="" />
        </a>
        <a
          href="https://www.google.com/intl/pt-BR/account/about/lojainfobama@gmail.com"
          className="btn-google">
            <img className='btn' src={Google} alt="" />
        </a>
      </div>
    </nav>
    )
}

export default NavBar
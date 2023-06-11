import loupe from '../assets/loupe.svg'
import Logo from '../assets/Logo.png'
import './Header.css'

function Header(){
    return (
      <header className='cabecalho'>
      <img style={{width:221, height:48}} src={Logo} alt=""/>
        <form style={{float:'right'}} action="" method="post">  
          <input 
            type="search"
            name="busca"
            id="busca"
            placeholder="Faça sua busca aqui!"
          />
          <button><img style={{width: 20, height: 20}} src={loupe} alt="" /></button>
        </form>
      </header>
    )
}

export default Header
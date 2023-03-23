// CSS
import './Navbar.css'

// REACT ICONS
import { FiMenu } from 'react-icons/fi'

//REACT
import { useRef, useState } from 'react'


const Navbar = () => {

    const nome = "</ RUBISMAR >"

    const dropMenu = useRef(null)

    const [ isActive, setIsActive ] = useState(false)

    const handleMenu = () => setIsActive(!isActive)

    const closeMenu = () => {

        setTimeout(() => {
            setIsActive(false)
        }, 500)

    }

  return (
    <div>
        <nav>
            <div className='box-nav-img'>
                <a href="#about" target={'_self'}>
                    <h2 className='logo-nome'>{ nome }</h2>
                </a>
            </div>
            <ul className='menu-desktop'>
                <li>
                    <a href="#about" target={'_self'}>
                        INICIO
                    </a>
                </li>
                <li>
                    <a href="#habilidades" target={'_self'}>
                        HABILIDADES
                    </a>
                </li>
                <li>
                    <a href="#projetos" target={'_self'}>
                        PROJETOS
                    </a>
                </li>
                <li>
                    <a href="#certificados" target={'_self'}>
                        CERTIFICADOS
                    </a>
                </li>
                <li>
                    <a href="#contatos" target={'_self'}>
                        CONTATO
                    </a>
                </li>
            </ul>

            <div className="btn-menu-mobile">
                <FiMenu onClick={handleMenu}/>
            </div>
            <div ref={dropMenu} className={`menu-mobile ${isActive ? "active" : "inactive"} `}>
            <ul>
                <li>
                    <a href="#about" onClick={ closeMenu } target={'_self'}>
                        INICIO
                    </a>
                </li>
                <li>
                    <a href="#habilidades" onClick={ closeMenu } target={'_self'}>
                        HABILIDADES
                    </a>
                </li>
                <li>
                    <a href="#projetos" onClick={ closeMenu } target={'_self'}>
                        PROJETOS
                    </a>
                </li>
                <li>
                    <a href="#certificados" onClick={ closeMenu } target={'_self'}>
                        CERTIFICADOS
                    </a>
                </li>
                <li>
                    <a href="#contatos" onClick={ closeMenu } target={'_self'}>
                        CONTATO
                    </a>
                </li>
            </ul>
        </div>
        </nav>
        
    </div>
  )
}

export default Navbar
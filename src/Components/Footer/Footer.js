// CSS
import './Footer.css'

// REACT ROUTER
import { Link } from 'react-router-dom'

// REACT ICONS
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <div className='box-svgs'>
            <div>
                <Link to={"https://github.com/Rubismar-Carlos"} target={"_blank"}>
                    < BsGithub />
                </Link>
            </div>
            <div>
                <Link to={"https://www.linkedin.com/in/rubismar-carlos-09a912246/"} target={"_blank"}>
                    < BsLinkedin />
                </Link>
            </div>
        </div>

        <p>RUBISMAR CARLOS &copy;</p>
    </footer>
  )
}

export default Footer
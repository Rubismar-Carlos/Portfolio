// CSS
import './Contato.css'

//REACT ROUTER
import { Link } from 'react-router-dom'

// REACT ICONS
import { HiOutlineMail }  from 'react-icons/hi'
import { BsWhatsapp, BsGithub } from 'react-icons/bs'
import { ImLinkedin2 } from 'react-icons/im'

const Contato = () => {
  return (
    <div>
        <div className="box-contato">
            <div className='box-container'>
              <Link to={"mailto:rubensc241@gmail.com"} target={"_blank"}>
                <div className="box-icon">
                  <HiOutlineMail />
                </div>
                <h3>E-Mail</h3>
                <p>rubensc241@gmail.com</p>
              </Link>
            </div>
            <div className='box-container'>
              <Link to={'https://wa.me/5562991054506'} target={"_blank"}>
                <div className="box-icon">
                    < BsWhatsapp />
                </div>
                  <h3>WhatsApp</h3>
                  <p>(62) 99105-4506</p>
                </Link>
            </div>
            <div className='box-container'>
              <Link to={'https://www.linkedin.com/in/rubismar-carlos-09a912246/'} target={"_blank"}>
                <div className="box-icon">
                    < ImLinkedin2 />
                </div>
                <h3>Linkedin</h3>
                <p>Rubismar Carlos</p>
              </Link>
            </div>
            <div className='box-container'>
                <Link to={'https://github.com/Rubismar-Carlos'} target={"_blank"}>
                    <div className="box-icon">
                        < BsGithub />
                    </div>
                    <h3>Github</h3>
                    <p>Rubismar-Carlos</p>
                  </Link> 
            </div>
        </div>
    </div>
  )
}

export default Contato
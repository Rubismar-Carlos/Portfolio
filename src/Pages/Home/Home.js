// CSS
import './Home.css'

// REACT ROUTER DOM
import { Link } from 'react-router-dom'

// COMPONENTS
import Skills from '../../Components/Skills/Skills'
import Contato from '../../Components/Contato/Contato'

// REACT ICONS 
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { DiBootstrap, DiMongodb, DiMysql } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'

// IMAGEM ABOUT
import imgAbout from '../../Imagens/imgAbout.png'
import ProjetosFinalizados from '../../Components/Projetos/ProjetosFinalizados'
import CertificadosFinalizados from '../../Components/Certificados/CertificadosFinalizados'

const Home = () => {

  return (
    <div>
        <div className="about" id="about">
            <div className="about-rubismar-carlos">
                <div className="img-about">
                    <img src={ imgAbout } alt="Rubismar Carlos" />
                </div>
                <div className="btn-about">
                    <h1> Olá, eu sou o <br /> Rubismar Carlos</h1>
                    <p className='color-text-about'>Desenvolvedor Front-End</p>
                    <div className='btn-box-btn'>
                        <div>
                            <Link to={"https://drive.google.com/file/d/1t02qq8ncs0TYv6MYXgte5LYoHRWWmo4s/view?usp=share_link"} target={'_blank'}>
                                <button className="btn">Download do CV</button>
                            </Link>
                        </div>
                        <div>
                            <a href="#contatos" target={'_self'}>
                                <button className="btn">Entrar em contato</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-txt">
                <h2>Sobre mim </h2>
                <div className="about-txt-p">
                    <p>
                    Desenvolvedor front-end, especializado em JavaScript e Node. Utilizo o framework React para desenvolvimento de aplicações web. Sou uma pessoa compromissada, gosto de sair da zona de conforto para tentar novos desafios e gosto de trabalhar em equipe. Tenho habilidades de comunicação e colaboração para ajudar a alcançar objetivos em equipe.
                    </p>
                </div>
            </div>
        </div>

        <div className='skill' id="habilidades">
            <h2>Habilidades</h2>
            <div className='container-skill'>
                < Skills skillName={"HTML5"} skillImg={ <FaHtml5 />} />
                < Skills skillName={"CSS3"} skillImg={ <FaCss3Alt />} />
                < Skills skillName={"Javascript"} skillImg={ <IoLogoJavascript />} />
                < Skills skillName={"REACT.JS"} skillImg={ <FaReact />} />
                < Skills skillName={"BOOTSTRAP"} skillImg={ <DiBootstrap />} />
                < Skills skillName={"MONGODB"} skillImg={ <DiMongodb />} />
                < Skills skillName={"MYSQL"} skillImg={ <DiMysql />} />
            </div>
        </div>

        <div className="projetos" id='projetos'>
            <h2 className='nome-projeto'>Projetos</h2>
            <div className="container-projetos">
                < ProjetosFinalizados />
            </div> 
        </div>

        <div className="certificados" id='certificados'>
            <h2 className='nome-projeto'>Meus Certificados</h2>
            <div className="container-certificados">
                < CertificadosFinalizados />
            </div>
        </div>

        <div className="contato" id='contatos'>
            <h2 className='nome-projeto'>Contato</h2>
            <div className="container-contato">
                < Contato />
            </div>
        </div>

    </div>
  )
}

export default Home
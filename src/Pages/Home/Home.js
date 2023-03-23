// CSS
import './Home.css'

// REACT ROUTER DOM
import { Link } from 'react-router-dom'

// COMPONENTS
import Skills from '../../Components/Skills/Skills'
import Projetos from '../../Components/Projetos/Projetos'
import Certificados from '../../Components/Certificados/Certificados'
import Contato from '../../Components/Contato/Contato'

// REACT ICONS 
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { DiBootstrap, DiMongodb, DiMysql } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'

// IMAGEM ABOUT
import imgAbout from '../../Imagens/imgAbout.png'

const Home = () => {

    // URL IMAGENS PROJETOS
    const imgProjetoBrunno = "https://fv9-5.failiem.lv/thumb_show.php?i=4ythqqa42&view"
    const imgProjetoToDoList = 'https://fv9-7.failiem.lv/thumb_show.php?i=ys9jzny7h&view'
    const imgProjetoQuizz = 'https://fv9-5.failiem.lv/thumb_show.php?i=m9famvyx4&view'
    const imgProjetoJogodaVelha = 'https://fv9-5.failiem.lv/thumb_show.php?i=9q7mx8r85&view'
    const imgProjetoSanduicheriaRonnys = "https://fv9-6.failiem.lv/thumb_show.php?i=c4gfwft9y&view"
    const imgProjetoRonnysReact = "https://fv9-3.failiem.lv/thumb_show.php?i=4q7rjbgrj&view"
    const imgProjetoMoviesLib = "https://fv9-4.failiem.lv/thumb_show.php?i=uk74eb8nj&view"
    const imgProjetoMiniBlogReact = "https://fv9-6.failiem.lv/thumb_show.php?i=qu2jwbfdn&view"
    const imgProjetoCrud = 'https://fv9-6.failiem.lv/thumb_show.php?i=fyd7bejx2&view'
    const imgProjetoInoxPortugal = 'https://fv9-1.failiem.lv/thumb_show.php?i=ykrskkkwj&view'
    const imgProjetoForSale = 'https://fv9-3.failiem.lv/thumb_show.php?i=84yn8w6eb&view'
    

    // URL IMAGENS CERTIFICADOS
    const imgUdemyJavascript = 'https://fv9-5.failiem.lv/thumb_show.php?i=t8echbuse&view'
    const imgUdemyReactjs = 'https://fv9-6.failiem.lv/thumb_show.php?i=7fn9r3pev&view'
    const imgCertificadoHarvard = 'https://fv9-1.failiem.lv/thumb_show.php?i=6zkqstvgj&view'

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
                            <Link to={"https://drive.google.com/file/d/1Bl2RmaBfVnRUY7hRcmBMG7Dnwp9SDQ4Y/view?usp=sharing"} target={'_blank'}>
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
                < Projetos 
                    nameProjeto={"Brunno Fotografo"} 
                    imgProjeto={ imgProjetoBrunno }
                    descricaoProjeto={ <p>Bruno Carvalho é um fotógrafo profissional. O site mostra todo o seu trabalho e como funciona, passo a passo, com todos os seus pacotes e valores de seus books.</p>}
                    linkLikedin={"https://www.linkedin.com/posts/rubismar-carlos-09a912246_react-reactjs-github-activity-7033112572878856192-Msnj?utm_source=share&utm_medium=member_desktop"}
                    linkGithub={"https://github.com/Rubismar-Carlos/Brunno-fotografo"}
                    linkProjeto={"https://brunno-fotografo.vercel.app"}
                />
                < Projetos 
                    nameProjeto={"Movies Lib"} 
                    imgProjeto={ imgProjetoMoviesLib }
                    descricaoProjeto={ <p>Consumindo a API "TMDB", site que mostra os melhores filmes atualmente, valores gastos nas produções, lucros e uma descrição do filme.</p>}
                    linkLikedin={"https://www.linkedin.com/posts/rubismar-carlos-09a912246_reactjs-api-projeto-activity-7027626013341663232-KrKG?utm_source=share&utm_medium=member_desktop"}
                    linkGithub={"https://github.com/Rubismar-Carlos/Movies-lib"}
                    linkProjeto={"https://movies-lib-eight-kappa.vercel.app"}
                />
                < Projetos 
                    nameProjeto={"Sanduicheria Ronnys"} 
                    imgProjeto={ imgProjetoSanduicheriaRonnys }
                    descricaoProjeto={ <p>Site criado com html, css e javascript, uma rede de sanduíches com todo o seu cardápio disponível e suas lojas abertas em toda região.</p>}
                    linkLikedin={""}
                    linkGithub={"https://github.com/Rubismar-Carlos/Sanduicheria-Ronnys"}
                    linkProjeto={'https://www.sanduicheriaronnys.com.br'}
                />
                < Projetos 
                    nameProjeto={"Inox Portugal"} 
                    imgProjeto={ imgProjetoInoxPortugal }
                    descricaoProjeto={ <p>Site criado com html, css e javascript, empresa de fabricação de corrimão e peças sob medidas de aço-inoxidável.</p>}
                    linkLikedin={""}
                    linkGithub={"https://github.com/Rubismar-Carlos/Inox-Portugal"}
                    linkProjeto={'https://www.inoxportugal.com.br'}
                />
                < Projetos 
                    nameProjeto={"Sistema de cadastro e login"} 
                    imgProjeto={ imgProjetoCrud }
                    descricaoProjeto={ <p>Como em todos os sites, é necessário realizar o cadastro e, em seguida, o login. Desenvolvido em React com banco de dados MongoDB.</p>}
                    linkLikedin={"https://www.linkedin.com/posts/rubismar-carlos-09a912246_mais-um-projeto-finalizado-desenvolvi-activity-7029620221380292608-SHzl?utm_source=share&utm_medium=member_desktop"}
                    linkGithub={"https://github.com/Rubismar-Carlos/CRUD"}
                    linkProjeto={''}
                />
                < Projetos 
                    nameProjeto={"ForSale"} 
                    imgProjeto={ imgProjetoForSale }
                    descricaoProjeto={ <p>Site com objetivo de divulgação de vendas de carro, com um formulário onde a pessoa coloca os dados do seu carro e quando enviado, vai direto para o banco de dados utilizando o JSON Server.</p>}
                    linkLikedin={"https://www.linkedin.com/posts/rubismar-carlos-09a912246_estou-sumido-mas-nunca-parado-mais-um-projeto-activity-7039685195922317312-uzJs?utm_source=share&utm_medium=member_desktop"}
                    linkGithub={"https://github.com/Rubismar-Carlos/For-Sale"}
                    linkProjeto={''}
                />
                < Projetos 
                    nameProjeto={"To do List"} 
                    imgProjeto={ imgProjetoToDoList }
                    descricaoProjeto={ <p>Adicione lembrentes do dia a dia, edite ou os exclua.</p> }
                    linkLikedin={"https://www.linkedin.com/posts/rubismar-carlos-09a912246_hoje-venho-apresentar-mais-um-projeto-activity-7043944818154049536-30fZ?utm_source=share&utm_medium=member_desktop"}
                    linkGithub={"https://github.com/Rubismar-Carlos/To-do-list"}
                    linkProjeto={"https://to-do-list-ic0z2aa4d-rubismar-carlos.vercel.app"}
                />
                < Projetos 
                    nameProjeto={"Ronnys 2.0"} 
                    imgProjeto={ imgProjetoRonnysReact }
                    descricaoProjeto={ <p>Mesmo site da sanduícheria ronnys so que feito em react com melhorias de imagens e cardápio.</p>}
                    linkLikedin={""}
                    linkGithub={"https://github.com/Rubismar-Carlos/Ronnys-React"}
                    linkProjeto={'https://ronnys-react-bv1lojfen-rubismar-carlos.vercel.app'}
                />
                < Projetos 
                    nameProjeto={"MiniBlog"} 
                    imgProjeto={ imgProjetoMiniBlogReact }
                    descricaoProjeto={ <p>Crie sua conta, poste e curta fotos de seus amigos, usando o "firebase" do google como banco de dados e autenticação de login.</p>}
                    linkLikedin={""}
                    linkGithub={"https://github.com/Rubismar-Carlos/MiniBlog-react"}
                    linkProjeto={''}
                />
                < Projetos 
                    nameProjeto={"Quizz de progamação"} 
                    imgProjeto={ imgProjetoQuizz }
                    descricaoProjeto={ <p>Um jogo quizz com perguntas relacionadas a progamação.</p>}
                    linkGithub={"https://github.com/Rubismar-Carlos/Quizz"}
                    linkProjeto={"https://rubismar-carlos.github.io/Quizz/"}
                />
                < Projetos
                    nameProjeto={"Jogo da Velha"} 
                    imgProjeto={ imgProjetoJogodaVelha }
                    descricaoProjeto={ <p>Escolha jogar contra outro jogador ou contra a maquina.</p>}
                    linkGithub={"https://github.com/Rubismar-Carlos/Jogo-da-velha"}
                    linkProjeto={"https://rubismar-carlos.github.io/Jogo-da-velha/"}
                />
            </div>
        </div>

        <div className="certificados" id='certificados'>
            <h2 className='nome-projeto'>Meus Certificados</h2>
            <div className="container-certificados">
                < Certificados  nomeCertificado="JavaScript do básico ao avançado (com Node.js e projetos)" imgCertificado={ imgUdemyJavascript }/>
                < Certificados  nomeCertificado="React do Zero a Maestria (com hooks, router, API, projetos)" imgCertificado={ imgUdemyReactjs } />
                < Certificados  nomeCertificado="Introdução à ciencias da computação - Curso de Harvard" imgCertificado={imgCertificadoHarvard} />
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
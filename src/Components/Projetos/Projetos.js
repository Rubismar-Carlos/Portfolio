// CSS
import './Projetos.css'

// REACT
import { useState } from 'react'

// COMPONENTS
import Modal from './Modal'

// REACT ROUTER DOM
import { Link } from 'react-router-dom'


const Projetos = ({nameProjeto, imgProjeto, descricaoProjeto, linkLikedin, linkGithub, linkProjeto}) => {

    /* Abrir e fechar modal */
    const [ openModal, setOpenModal ] = useState(false)

    //const handleClick = () => setProjectClick(!projectClick)

    const handleOpenModal = () => setOpenModal(!openModal)
    
  return (
    <div>
        <div className="box-projeto">
            <div className='img-projeto'>
                <img src={imgProjeto} alt="Imagem projeto" />
            </div>
            <div className="apresentacao-projeto" onClick={ handleOpenModal }>
                <div className="box-apresentacao">
                    <h2>{nameProjeto}</h2>
                    <div className="aprensentacao-projeto">
                        <h3>Clique para ver mais</h3>
                    </div>
                </div>
            </div>
        </div>

        <Modal isOpen={openModal} setCloseModal={() => setOpenModal(!openModal)}>
            <div className="conteudo-modal">
                <div className="box-modal-projeto">
                    <div className="img-modal-projeto">
                        <img src={ imgProjeto } alt="imagem projeto" />
                    </div>
                    <div className="descricao-modal-projeto">
                        <div className="nome-modal-projeto">
                            <h2>{ nameProjeto }</h2>
                        </div>
                        <div className="descricao-modal-projeto-txt">
                            <h4>{ descricaoProjeto }</h4>
                        </div>
                    </div>
                </div>
                <div className="btn-modal-projeto">
                    <button className='btn-modal'>
                        <Link to={linkLikedin} target={'_blank'}>
                            Ver no Linkedin
                        </Link>
                    </button>
                    <button className='btn-modal'>
                        <Link to={linkGithub} target={'_blank'}>
                            Ver repositório
                        </Link>
                    </button>
                    <button className='btn-modal'>
                        <Link to={linkProjeto} target={'_blank'}>
                            Projeto
                        </Link>
                    </button>
                </div>

            </div>
        </Modal>
    </div>
  )
}

export default Projetos
// CSS
import './Certificados.css'

// COMPONENTS
import Modal from '../Projetos/Modal'

// REACT
import { useState } from 'react'


const Certificados = ({nomeCertificado, imgCertificado}) => {

    const [ openModal, setOpenModal ] = useState(false)

    const handleOpenModal = () => setOpenModal(!openModal)

    // MOUSE ENTRAR E SAIR
  return (
    <div>
        <div className="box-certificado">
            <div className="img-box-certificado">
                <img src={ imgCertificado } alt="Imagem certificado" />
            </div>
            <div className="box-apresentacao-certificado" onClick={handleOpenModal}>
                    <h2>{nomeCertificado}</h2>
                    <h4>Clique aqui para ver mais</h4>
            </div>
        </div>
            <Modal isOpen={openModal} setCloseModal={() => setOpenModal(!openModal)}>
                <div className="img-box-certificado-modal">
                    <img src={ imgCertificado } alt="Imagem certificado" />
                </div>
            </Modal>
        
    </div>
  )
}

export default Certificados
// CSS
import './Projetos.css'

// REACT ICONS
import { AiOutlineClose } from 'react-icons/ai'

export default function Modal({ isOpen, setCloseModal, children }) {

    

    if( isOpen ) {

        return ( 
                <div className='container-modal'>
                    <div className="box-modal">
                        <div className="close-modal">
                            <AiOutlineClose onClick={setCloseModal}/>
                        </div>
                        <div>
                            {children}
                        </div>
                    </div>
                </div> 
                )
    }
}

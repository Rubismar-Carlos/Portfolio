// react
import { useState } from "react"

// css
import './Certificados.css'

// components
import Certificados from "./Certificados"

const CertificadosFinalizados = () => {

    const [certificados, setCertificados] = useState([
        {
            id: 1,
            imgCertificado: "https://fv9-5.failiem.lv/thumb_show.php?i=t8echbuse&view",
            nomeCertificado: "JavaScript do básico ao avançado (com Node.js e projetos)"
        },
        {
            id: 2,
            imgCertificado: "https://fv9-6.failiem.lv/thumb_show.php?i=7fn9r3pev&view",
            nomeCertificado: "React do Zero a Maestria (com hooks, router, API, projetos)"
        },
        {
            id: 3,
            imgCertificado: "https://fv9-1.failiem.lv/thumb_show.php?i=6zkqstvgj&view",
            nomeCertificado: "Introdução à ciencias da computação - Curso de Harvard"
        }
    ])

  return (
    <div>
        <div className="container-certificados">
            {certificados && certificados.map((ctf) => (
                < Certificados 
                    key={ctf.id}
                    imgCertificado={ctf.imgCertificado}
                    nomeCertificado={ctf.nomeCertificado}
                />
            ))}
        </div>
    </div>
  )
}

export default CertificadosFinalizados
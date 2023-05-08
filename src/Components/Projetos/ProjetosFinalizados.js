import { useState } from "react"

// css
import './Projetos.css'

import Projetos from "./Projetos"

const ProjetosFinalizados = () => {

    const [projetos, setProjetos] = useState([
        {
            id: 13,
            imgProjeto: "https://fv5-2.failiem.lv/thumb_show.php?i=ceumxt3pj&view",
            nameProjeto: "Slipknot",
            descricaoProjeto: "Site com explicações sobre a banda, músicas, artistas e ex-artistas, utilizando o framework react.js, e bibliotecas como react-router-dom e react-icons.",
            linkLikedin: "https://www.linkedin.com/feed/update/urn:li:activity:7061388578941001728/",
            linkGithub: "https://github.com/Rubismar-Carlos/Slipknot",
            linkProjeto: "https://slipknot.vercel.app"
        },
        {
            id: 12,
            imgProjeto: "https://fv9-5.failiem.lv/thumb_show.php?i=4ythqqa42&view",
            nameProjeto: "Brunno Fotografo",
            descricaoProjeto: "Bruno Carvalho é um fotógrafo profissional. O site mostra todo o seu trabalho e como funciona, passo a passo, com todos os seus pacotes e valores de seus books.",
            linkLikedin: "https://www.linkedin.com/posts/rubismar-carlos-09a912246_react-reactjs-github-activity-7033112572878856192-Msnj?utm_source=share&utm_medium=member_desktop",
            linkGithub: "https://github.com/Rubismar-Carlos/Brunno-fotografo",
            linkProjeto: "https://brunno-fotografo.vercel.app"
        },
        {
            id: 11,
            imgProjeto: "https://fv9-4.failiem.lv/thumb_show.php?i=uk74eb8nj&view",
            nameProjeto: "Movies Lib",
            descricaoProjeto: "Consumindo a API TMDB, site que mostra os melhores filmes atualmente, valores gastos nas produções, lucros e uma descrição do filme.",
            linkLikedin: "https://www.linkedin.com/posts/rubismar-carlos-09a912246_reactjs-api-projeto-activity-7027626013341663232-KrKG?utm_source=share&utm_medium=member_desktop",
            linkGithub: "https://github.com/Rubismar-Carlos/Movies-lib",
            linkProjeto: "https://movies-lib-eight-kappa.vercel.app"

        },
        {
            id: 10,
            imgProjeto: "https://fv9-6.failiem.lv/thumb_show.php?i=c4gfwft9y&view",
            nameProjeto: "Sanduicheria Ronnys",
            descricaoProjeto: "Site criado com html, css e javascript, uma rede de sanduícherias com todo o seu cardápio disponivel e suas lojas abertas em toda a região.",
            linkLikedin: "",
            linkGithub: "https://github.com/Rubismar-Carlos/Sanduicheria-Ronnys",
            linkProjeto: 'https://www.sanduicheriaronnys.com.br'
        },
        {
            id: 9,
            imgProjeto: "https://fv5-2.failiem.lv/thumb_show.php?i=ha3rgjbts&view",
            nameProjeto: "Spotify - Clone",
            descricaoProjeto: "Clone do front end da plataforma de streaming de música spotify",
            linkLikedin: "https://www.linkedin.com/posts/rubismar-carlos-09a912246_ol%C3%A1-pessoal-gostaria-de-compartilhar-um-activity-7054141792782299136-iNE7?utm_source=share&utm_medium=member_desktop",
            linkGithub: "https://github.com/Rubismar-Carlos/Spotify-Clone",
            linkProjeto: "https://spotify-clone-self-three.vercel.app"
        },
        {
            id: 8,
            imgProjeto: "https://fv9-1.failiem.lv/thumb_show.php?i=ykrskkkwj&view",
            nameProjeto: "Inox Portugal",
            descricaoProjeto: "Site criado com html, css e javascrip, empresa de fabricação de corrimão e peças sob medidas de aço-inoxidável.",
            linkLikedin: "",
            linkGithub: "https://github.com/Rubismar-Carlos/Inox-Portugal",
            linkProjeto: "https://www.inoxportugal.com.br"
        },
        {
            id: 7,
            imgProjeto: "https://fv9-6.failiem.lv/thumb_show.php?i=fyd7bejx2&view",
            nameProjeto: "Sistema de cadastro e login",
            descricaoProjeto: "Como em todos os sites, é necessário realizar o cadastro e, em seguida, o login. Desenvolvido em React com banco de dados MongoDB.",
            linkLikedin: "https://www.linkedin.com/posts/rubismar-carlos-09a912246_mais-um-projeto-finalizado-desenvolvi-activity-7029620221380292608-SHzl?utm_source=share&utm_medium=member_desktop",
            linkGithub: "https://github.com/Rubismar-Carlos/CRUD",
            linkProjeto: ""
        },
        {
            id: 6,
            imgProjeto: "https://fv9-3.failiem.lv/thumb_show.php?i=84yn8w6eb&view",
            nameProjeto: "ForSale",
            descricaoProjeto: "Site com objetivo de divulgação de vendas de carro, com um formulário onde a pessoa coloca os dados do seu carro e quando enviado, vai direto para o banco de dados utilizando o JSON Server.",
            linkLikedin: "https://www.linkedin.com/posts/rubismar-carlos-09a912246_estou-sumido-mas-nunca-parado-mais-um-projeto-activity-7039685195922317312-uzJs?utm_source=share&utm_medium=member_desktop",
            linkGithub: "https://github.com/Rubismar-Carlos/For-Sale"
        },
        {
            id: 5,
            imgProjeto: "https://fv9-7.failiem.lv/thumb_show.php?i=ys9jzny7h&view" ,
            nameProjeto: "Todo List",
            descricaoProjeto: "Adicione lembrentes do dia a dia, edite ou os exclua.",
            linkLikedin: "https://www.linkedin.com/posts/rubismar-carlos-09a912246_hoje-venho-apresentar-mais-um-projeto-activity-7043944818154049536-30fZ?utm_source=share&utm_medium=member_desktop",
            linkGithub: "https://github.com/Rubismar-Carlos/To-do-list",
            linkProjeto: "https://to-do-list-ic0z2aa4d-rubismar-carlos.vercel.app"
        },
        {
            id: 4,
            imgProjeto: "https://fv5-2.failiem.lv/thumb_show.php?i=abve9vhms&view",
            nameProjeto: "Sanduícheria Ronnys 2.0",
            descricaoProjeto: "Sanduicheria Ronnys 2.0, consiste no mesmo codigo, atualizado com um novo layout, imagens e uma nova fonte de texto atualizada.",
            linkLikedin: "",
            linkGithub: "https://github.com/Rubismar-Carlos/Sanduicheira-Ronnys-2.0",
            linkProjeto: "https://rubismar-carlos.github.io/Sanduicheira-Ronnys-2.0/"
        },
        {
            id: 3,
            imgProjeto: "https://fv9-6.failiem.lv/thumb_show.php?i=qu2jwbfdn&view",
            nameProjeto: "MiniBlog",
            descricaoProjeto: "Crie sua conta, poste e curta fotos de seus amigos, usando o firebase do google como banco de dados e autenticação de login.",
            linkLikedin: "",
            linkGithub: "https://github.com/Rubismar-Carlos/MiniBlog-react",
            linkProjeto: ""
        },
        {
            id: 2,
            imgProjeto: "https://fv9-5.failiem.lv/thumb_show.php?i=m9famvyx4&view",
            nameProjeto: "Quizz de progamação",
            descricaoProjeto: "Um jogo quizz com perguntas relacionadas a progamação.",
            linkGithub: "https://github.com/Rubismar-Carlos/Quizz",
            linkProjeto: "https://rubismar-carlos.github.io/Quizz/"
        },
        {
            id: 1,
            imgProjeto: "https://fv9-5.failiem.lv/thumb_show.php?i=9q7mx8r85&view",
            nameProjeto: "Jogo da Velha",
            descricaoProjeto: "Escolha jogar contra outro jogador ou contra a maquina.",
            linkGithub: "https://github.com/Rubismar-Carlos/Jogo-da-velha",
            linkProjeto: "https://rubismar-carlos.github.io/Jogo-da-velha/"
        },
    ])

    const [counterProjetos, setCounterProjetos] = useState(6)

    const [btnVisivel, setBtnVisivel] = useState(true)

    const handleMaisProjetos = () => {

        setBtnVisivel(false)

        setCounterProjetos(counterProjetos + 15)

    }

  return (
    <div>
            <div className="container-projetosfinalizados">
                {projetos.slice(0, counterProjetos).map((prj) => (
                    <Projetos 
                        key={prj.id}
                        imgProjeto={prj.imgProjeto}
                        nameProjeto={prj.nameProjeto}
                        descricaoProjeto={prj.descricaoProjeto}
                        linkLikedin={prj.linkLikedin}
                        linkGithub={prj.linkGithub}
                        linkProjeto={prj.linkProjeto}
                    />
                )) }
            </div>
            <div className="container-btn">
                {btnVisivel && <button className="btn-mais-projetos" onClick={handleMaisProjetos}> Carregar mais projetos  </button>}
            </div>
    </div>
  )
}

export default ProjetosFinalizados
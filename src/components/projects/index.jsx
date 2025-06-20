import CardContent from '../card'

const Project = () => {
  const lista_projetos = [
    {
      name: "website clothing",
      url: "./images/projetos/website_clothing.png",
      description: "Projeto visando aperfeiçoar aprendizado em programação front-end, a ideia é produzir de forma prática um sistema de compra de peças de roupa envolvendo todos os aspectos dessa situação como carrinho de compras, listagem de produtos e finalização da compra",
      languages: ["html", "css", "react", "bootstrap"],
      repository: "https://github.com/tiago-sb/app-website-clothing",
      deploy: "https://app-website-clothing.vercel.app/"
    },
    {
      name: "clone dio",
      url: "./images/projetos/clone_dio.png",
      description: "Clone do site da instituição de ensino DIO em sua versão para computador, o porjeto lida com questões contudentes do dia dia envolvendo formulários, como por exemplo o login e o cadastro de usuários",
      languages: ["html", "css", "react", "styled components"],
      repository: "https://github.com/tiago-sb/app-clone-dio",
      deploy: "https://app-clone-dio.onrender.com/"
    },
    {
      name: "validation registration",
      url: "./images/projetos/validatio_registration.png",
      description: "Projeto que lida com questões contudentes do dia dia envolvendo formulários, como por exemplo o login e o cadastro de usuários",
      languages: ["hmtl", "css", "react", "styled components"],
      repository: "https://github.com/tiago-sb/app-validation-registration"
    },
    {
      name: "calculadora",
      url: "./images/projetos/calculadora.png",
      description: "Um projeto típico de desenvolvimento web moderno que incorpora uma variedade de tecnologias para criar uma experiência de usuário interativa. Faça os seus devidos calculos aritméticos e resolva seu problema de matemática aqui",
      languages: ["hmtl", "css", "react", "styled components"],
      repository: "https://github.com/tiago-sb/app-calculadora",
      deploy: "https://app-calculadora-plum.vercel.app/"
    },
    {
      name: "user find github",
      url: "./images/projetos/user_find_github.png",
      description: "Um projeto típico de desenvolvimento web moderno que incorpora uma variedade de tecnologias para criar uma experiência de usuário interativa e responsiva. Procure seu perfil do gitHub neste projeto e encontre algumas informações suas e seus repositórios favoritos",
      languages: ["html", "css", "react"],
      repository: "https://github.com/tiago-sb/app-user-find-github",
      deploy: "https://app-user-find-github.vercel.app/"
    },
    {
      name: "website academy",
      url: "./images/projetos/website_academy.png",
      description: "Visando aperfeiçoar as habilidades nos principais pilares do desenvolvimento Web da atualidade. Neste projeto de código fizemos um website que que poderia ser utilizado por academias",
      languages: ["html", "css", "react", "bootstrap"],
      repository: "https://github.com/tiago-sb/app-website-academy",
      deploy: "https://app-website-academy.vercel.app/"
    },
    {
      name: "pokedex",
      url: "./images/projetos/pokedex.png",
      description: "Visando aperfeiçoar as habilidades nos principais pilares do desenvolvimento Web da atualidade. Neste projeto de código fizemos uma pokedex que consome a API REST pokeAPI e integra em sua aplicação aqueles dados consumidos",
      languages: ["html", "css", "javascript"],
      repository: "https://github.com/tiago-sb/app-pokedex",
      deploy: "https://app-pokedex-beta.vercel.app/"
    },
    {
      name: "love films",
      url: "./images/projetos/love_films.png",
      description: "Este aplicativo permite aos usuários buscar filmes de sua escolha e exibir informações detalhadas sobre eles, utilizando uma API para fornecer dados precisos e atualizados. Algumas funcionalidades incluem busca de filmes, exibição de detalhes relevantes e integração com API para obter informações",
      languages: ["html", "css", "javascript"],
      repository: "https://github.com/tiago-sb/app-love-films",
      deploy: "https://app-love-films.vercel.app/index.html"
    },
    {
      name: "sistema de saude",
      url: "./images/projetos/sistema_de_saude.png",
      description: "O Sistema Unificado de Auxílio à Vacinação - SUAVACINA é um sistema inovador destinado a otimizar a gestão de vacinação nos postos de saúde, promovendo uma comunicação eficaz entre pacientes e unidades de atendimento",
      languages: ["html", "css", "javascript"],
      repository: "https://github.com/tiago-sb/app-sistema-de-saude"
    }
  ]

  return (
    <section style={{ backgroundColor: '#fff', paddingBottom: 50 }}>
      <h1
        id='projects'
        style={{
          color: 'rgba(33, 37, 41, 0.75)',
          fontFamily: 'Bebas Neue',
          fontSize: 60,
          textAlign: 'center',
          paddingTop: 60,
          paddingBottom: 50
        }}
      >
        Projetos
      </h1>
      <div className='d-flex justify-content-center flex-wrap'>
        {
          lista_projetos.map((projeto) => (
            <CardContent
              name={projeto.name}
              src={projeto.url}
              description={projeto.description}
              languages={projeto.languages}
              repository={projeto.repository}
              deploy={projeto.deploy}
            />
          ))
        }
      </div>
    </section>

  )
}

export default Project
import CardContent from '../card'
import { Themes } from '../theme/Themes'
import { Translations } from '../translation/Translation'

const Project = ({ language, theme }) => {
  const t = Translations[language]
  const c = Themes[theme]

  const lista_projetos = [
    {
      name: "website clothing",
      url: "./images/projetos/website_clothing.png",
      languages: ["html", "css", "react", "bootstrap"],
      repository: "https://github.com/tiago-sb/app-website-clothing",
      deploy: "https://app-website-clothing.vercel.app/"
    },
    {
      name: "clone dio",
      url: "./images/projetos/clone_dio.png",
      languages: ["html", "css", "react", "styled components"],
      repository: "https://github.com/tiago-sb/app-clone-dio",
      deploy: "https://app-clone-dio.onrender.com/"
    },
    {
      name: "validation registration",
      url: "./images/projetos/validatio_registration.png",
      languages: ["hmtl", "css", "react", "styled components"],
      repository: "https://github.com/tiago-sb/app-validation-registration"
    },
    {
      name: "calculadora",
      url: "./images/projetos/calculadora.png",
      languages: ["hmtl", "css", "react", "styled components"],
      repository: "https://github.com/tiago-sb/app-calculadora",
      deploy: "https://app-calculadora-plum.vercel.app/"
    },
    {
      name: "user find github",
      url: "./images/projetos/user_find_github.png",
      languages: ["html", "css", "react"],
      repository: "https://github.com/tiago-sb/app-user-find-github",
      deploy: "https://app-user-find-github.vercel.app/"
    },
    {
      name: "website academy",
      url: "./images/projetos/website_academy.png",
      languages: ["html", "css", "react", "bootstrap"],
      repository: "https://github.com/tiago-sb/app-website-academy",
      deploy: "https://app-website-academy.vercel.app/"
    },
    {
      name: "pokedex",
      url: "./images/projetos/pokedex.png",
      languages: ["html", "css", "javascript"],
      repository: "https://github.com/tiago-sb/app-pokedex",
      deploy: "https://app-pokedex-beta.vercel.app/"
    },
    {
      name: "love films",
      url: "./images/projetos/love_films.png",
      languages: ["html", "css", "javascript"],
      repository: "https://github.com/tiago-sb/app-love-films",
      deploy: "https://app-love-films.vercel.app/index.html"
    },
    {
      name: "sistema de saude",
      url: "./images/projetos/sistema_de_saude.png",
      languages: ["html", "css", "javascript"],
      repository: "https://github.com/tiago-sb/app-sistema-de-saude"
    },
    {
      name: "budgeting",
      url: './images/projetos/budgeting.png',
      languages: ["Java", "Spring AI", "Ollama", "Whisper", "Piper TTS", "MySQL"],
      repository: "https://github.com/tiago-sb/app-budgeting"
    },
    {
      name: "E-commerce Sale",
      url: "./images/projetos/e-commerce_sale.png",
      languages: ["TypeScript", "React" ,"Spring Boot", "PostgreSQL"],
      repository: "https://github.com/tiago-sb/app-ecommerce-sale"
    }
  ]

  return (
    <section style={{ backgroundColor: c.background, paddingBottom: 50 }}>
      <h1
        id='projects'
        style={{
          color: c.text,
          fontFamily: 'Bebas Neue',
          fontSize: 60,
          textAlign: 'center',
          paddingTop: 60,
          paddingBottom: 50
        }}
      >
        {t.projects.title}
      </h1>
      <div className='d-flex justify-content-center flex-wrap' style={{ color: c.text, backgroundColor: c.background }}>
        {lista_projetos.map((projeto, index) => (
          <CardContent
            key={index}
            name={t.projects.items[index].name}
            src={projeto.url}
            description={t.projects.items[index].description}
            languages={projeto.languages}
            repository={projeto.repository}
            deploy={projeto.deploy}
            theme={theme}
            t={t}
          />
        ))}
      </div>
    </section>

  )
}

export default Project
const { NONAME } = require("dns")

const selecaoBrasileira = [

      {
            nome: 'Gabi Guimarães',
            idade: 29,
            posicao: 'Ponteira',
            altura: '1.80',
            disponivel: true,
            foto: "./media.png/GabiGuimaraes.png",
            link: 'https://pt.wikipedia.org/wiki/Gabriela_Guimar%C3%A3es'
      },

      {
            nome: 'Pri Daroit',
            idade: 34,
            posicao: 'Ponteira',
            altura: '1.83',
            disponivel: true,
            foto: "./media.png/PriDaroit.png",
            link: "https://pt.wikipedia.org/wiki/Pri_Daroit"
      },

      {
            nome: 'Rosamaria',
            idade: 29,
            posicao: 'Ponteira/Oposta',
            altura: '1.85',
            disponivel: true,
            foto: "./media.png/Rosamaria.png",
            link: "https://pt.wikipedia.org/wiki/Rosamaria_Montibeller"
      },

      {
            nome: 'Carol Gattaz',
            idade: 41,
            posicao: 'Central',
            altura: '1.93',
            disponivel: false,
            foto: "./media.png/CarolGattaz.png",
            link: "https://pt.wikipedia.org/wiki/Carol_Gattaz"
      },

      {
            nome: 'Ana Carolina',
            idade: 32,
            posicao: 'Central',
            altura: '1.83',
            disponivel: true,
            foto: "./media.png/AnaCarolina.png",
            link: "https://pt.wikipedia.org/wiki/Ana_Carolina_(voleibolista)"
      },

      {
            nome: 'Lorena',
            idade: 23,
            posicao: 'Central',
            altura: '1.90',
            disponivel: true,
            foto: "./media.png/Lorena.png",
            link: "https://pt.wikipedia.org/wiki/Lorena_Viezel"
      },

      {
            nome: 'Julia Kudiess',
            idade: 20,
            posicao: 'Central',
            altura: '1.89',
            disponivel: false,
            foto: "./media.png/JuliaKudiess.png",
            link: "https://pt.wikipedia.org/wiki/J%C3%BAlia_Kudiess"
      },

      {
            nome: 'Macris',
            idade: 34,
            posicao: 'Levantadora',
            altura: '1.78',
            disponivel: true,
            foto: "./media.png/Macris.png",
            link: "https://pt.wikipedia.org/wiki/Macris_Carneiro"
      },

      {
            nome: 'Roberta',
            idade: 33,
            posição: 'Levantadora',
            altura: '1.85',
            disponivel: true,
            foto: "./media.png/Roberta.png",
            link: "https://pt.wikipedia.org/wiki/Roberta_Ratzke"
      },

      {
            nome: 'Kisy',
            idade: 23,
            posição: 'Oposta',
            altura: '1.91',
            disponivel: true,
            foto: "./media.png/Kisy.png",
            link: "https://pt.wikipedia.org/wiki/Kisy"
      },

      {
            nome: 'Tainara',
            idade: 23,
            posicao: 'Oposta',
            altura: '1.90',
            disponivel: false,
            foto: "./media.png/Tainara.png",
            link: "https://pt.wikipedia.org/wiki/Tai_Santos"
      },

      {
            nome: 'Lorenne',
            idade: 27,
            posicao: 'Oposta',
            altura: '1.87',
            disponivel: false,
            foto: "./media.png/Lorenne.png",
            link: "https://pt.wikipedia.org/wiki/Lorenne_Teixeira"
      },

      {
            nome: 'Natinha',
            idade: 26,
            posicao: 'Líbero',
            altura: '1.65',
            disponivel: true,
            foto: "./media.png/Natinha.png",
            link: "https://pt.wikipedia.org/wiki/Nat%C3%A1lia_Ara%C3%BAjo"
      },

      {
            nome: 'Nyeme',
            idade: 24,
            posicao: 'Líbero',
            altura: '1.75',
            disponivel: true,
            foto: "./media.png/Nyeme.png",
            link: "https://pt.wikipedia.org/wiki/Nyeme_Costa"
      },

]

const media = () => {
      let media = 0
      let contador = 0
      let somaIdade = 0

      for (jogadora of jogadoras) {
            somaIdade += jogadora.idade
            contador++
            media = somaIdade / contador
      }

      console.log("Idade média das jogadoras:", Math.round(media))
}

media()

const relatorio = () => {
      for (jogadora of jogadora) {
            console.log(`

            Nome: ${jogadora.nome}
            Idade: ${jogadora.idade}
            Altura: ${jogadora.altura}
            Foto: ${jogadora.foto ? 'Tem foto' : 'Não tem foto'}
            Disponibilidade: ${jogadora.disponivel ? 'Sim' : 'Não'}
            Link: ${jogadora.link}

            `);
      }
}

relatorio()

const buscarJogadora = () => {
      // console.log("Ok")
      const nomeJogadora = document.getElementById('search-text').value.toLowerCase()
      // console.log(nomeJogadora)

      const filtroJogadora = jogadoras.filter((item) => {
            if (item.nome.toLowerCase().includes(nomeJogadora)) {
                  return item
            }
      })

      // console.log(filtroJogadora)

      return filtroJogadora.length > 0 ? gerarCards
            (filtroJogadora) : gerarCards('Jogadora não foi encontrada')
}

const gerarCards = (retornoBuscarJogadora) => {

      let card = ''

      if (retornoBuscarJogadora === 'Jogadora não foi encontrada') {
            card = (`<article class="card">
                <p>${retornoBuscarJogadora}</p>
            </article>
            `)
      } else {

            retornoBuscarJogadora.map((item) => {
                  card += `
                  <span class="ponteiraPosicaoP">${jogadora.posicao}</span>
                  <span class="ponteiraPosicaoG">${jogadora.posicao}</span>
                  <img src="${item.foto}.png">
                  <ul>
                        <li><a href="${item.link}">${item.nome.toUpperCase}</a></li>
                        <li>Idade: ${item.idade} anos</li>
                        <li>Posição: ${item.posicao}</li>
                        <li>Altura: ${item.altura}m</li>
                  </ul>`
            })
      }

      document.getElementById('listaJogadoras').innerHTML = card
      document.getElementById('search-text').value = ' '

      buscarJogadora()
}

// buscarJogadora()
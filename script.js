
/* =========================================
   INFINITY GEEK - JAVASCRIPT
   ========================================= */

// BANCO DE MATÉRIAS DEMONSTRATIVAS
// Troque títulos e textos para publicar notícias reais.

const noticias = [
  {
    id: 1,
    categoria: "filmes",
    titulo: "Marvel: conheça o universo dos Vingadores",
    descricao: "Heróis, histórias épicas e grandes encontros no cinema.",
    conteudo: "O Universo Cinematográfico Marvel reúne personagens como Homem de Ferro, Thor, Capitão América e muitos outros. Os Vingadores se tornaram um dos maiores símbolos da cultura pop mundial.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_29FWvzL4aLPyYEJ9HOywLOF1bf6Ugj_Qb5KaP1bupr7PRhECbtVt3c&s=10",
    data: "Especial Geek",
    fonte: ""
  },
  {
    id: 2,
    categoria: "filmes",
    titulo: "Batman: o legado do Cavaleiro das Trevas",
    descricao: "Gotham, seus vilões e a história de um dos maiores heróis da DC.",
    conteudo: "Batman é um dos personagens mais conhecidos da DC Comics. Diferente de muitos super-heróis, Bruce Wayne utiliza inteligência, treinamento e tecnologia para enfrentar o crime em Gotham City.",
    imagem: "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_.jpg",
    data: "Especial Geek",
    fonte: ""
  },
  {
    id: 3,
    categoria: "games",
    titulo: "GTA: por que a franquia conquistou os jogadores?",
    descricao: "Mundo aberto, liberdade e histórias marcantes.",
    conteudo: "Grand Theft Auto é uma das franquias mais populares dos videogames. Seus jogos combinam exploração em mundo aberto, missões e narrativas inspiradas em grandes cidades.",
    imagem: "https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_Robbery_With_Logo_landscape.0sjdgaq91u2yn.jpg?akim=1&imdensity=1&imwidth=3840",
    data: "Especial Games",
    fonte: ""
  },
  {
    id: 4,
    categoria: "esports",
    titulo: "Valorant: estratégia e precisão no competitivo",
    descricao: "Entenda o cenário competitivo do FPS da Riot Games.",
    conteudo: "Valorant combina tiros táticos com habilidades especiais de agentes. No cenário profissional, equipes precisam de comunicação, estratégia e excelente precisão para vencer.",
    imagem: "https://cdna.artstation.com/p/assets/images/images/024/820/442/large/suke-valorant-phx-jett-brand.jpg?1583645279",
    data: "Especial eSports",
    fonte: ""
  },
  {
    id: 5,
    categoria: "esports",
    titulo: "Counter-Strike 2: a emoção dos campeonatos",
    descricao: "Conheça o universo dos torneios profissionais de CS2.",
    conteudo: "Counter-Strike 2 mantém o foco no trabalho em equipe, no controle de mapas e na precisão. Grandes competições reúnem organizações profissionais e milhares de fãs pelo mundo.",
    imagem: "https://thumb.wikimedia.org/wikipedia/en/thumb/f/f2/CS2_Cover_Art.jpg/250px-CS2_Cover_Art.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    data: "Especial eSports",
    fonte: ""
  },
  {
    id: 6,
    categoria: "musica",
    titulo: "Música pop: os shows que movimentam multidões",
    descricao: "Palcos gigantes, artistas e experiências inesquecíveis.",
    conteudo: "A música pop reúne artistas de diferentes estilos e gerações. Grandes turnês combinam apresentações ao vivo, iluminação, coreografias e produções visuais impressionantes.",
    imagem: "https://images.genius.com/d332054458345a1cb3e750cca9a2d687.1000x1000x1.png",
    data: "Especial Música",
    fonte: ""
  },
  {
    id: 7,
    categoria: "esportes",
    titulo: "Futebol: a paixão que conecta torcedores",
    descricao: "Rivalidades, grandes estádios e momentos históricos.",
    conteudo: "O futebol é um dos esportes mais acompanhados do planeta. Clubes, seleções e torcedores transformam cada campeonato em uma experiência única.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ECZDtMFdw5Q4yJt1IQdzgEsYa81ZNUH3vDYFYMKk-J1gZ0hl1ykSoOnz&s=10",
    data: "Especial Esportes",
    fonte: ""
  },
  {
    id: 8,
    categoria: "games",
    titulo: "PlayStation, Xbox e PC: diferentes mundos gamer",
    descricao: "As plataformas que fazem parte da cultura dos jogos.",
    conteudo: "Cada plataforma oferece experiências diferentes. Consoles e computadores possuem comunidades, jogos e tecnologias que contribuem para a evolução da indústria gamer.",
    imagem: "https://i.ytimg.com/vi/AiuZ1Eexf-A/sddefault.jpg",
    data: "Especial Games",
    fonte: ""
  },
  {
    id: 9,
    categoria: "filmes",
    titulo: "Super-heróis: Marvel e DC na cultura pop",
    descricao: "Duas editoras que marcaram gerações de fãs.",
    conteudo: "Marvel e DC construíram universos de personagens conhecidos mundialmente. Histórias em quadrinhos, filmes, séries e animações ajudaram a popularizar os super-heróis.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ths_0uc8q_Hjqzk25iOuhLuBm6N921NPDHfzLaW1-eYKD0pQGWmYemet&s=10",
    data: "Especial Cinema",
    fonte: ""
  },
  {
    id: 10,
    categoria: "musica",
    titulo: "Rock: guitarras e energia nos grandes festivais",
    descricao: "A influência do rock na música e na cultura jovem.",
    conteudo: "O rock influenciou gerações por meio de bandas, festivais e estilos variados. Guitarras, baterias e apresentações ao vivo continuam fazendo parte de sua identidade.",
    imagem: "https://s2-oglobo.glbimg.com/-OAbyqdUMPCD8_n0JCYx1EPn8mM=/0x0:1600x1067/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2026/l/L/mfmGqfQZWgWvmBxJ91AA/whatsapp-image-2026-09-07-at-17.33.05.jpeg",
    data: "Especial Música",
    fonte: ""
  },
  {
    id: 11,
    categoria: "esportes",
    titulo: "Basquete: velocidade, técnica e grandes estrelas",
    descricao: "Um esporte que também influencia a cultura pop.",
    conteudo: "O basquete une habilidade, velocidade e trabalho coletivo. Além das quadras, o esporte influencia a moda, a música, os videogames e a cultura urbana.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBBXYRfv0b8K2DAhi9XD0dAlmghTokbEMpUtteD6Ukm_tYIYh9Jvagog&s=10",
    data: "Especial Esportes",
    fonte: ""
  },
  {
    id: 12,
    categoria: "esports",
    titulo: "Como funcionam os campeonatos de eSports?",
    descricao: "Equipes, treinadores, estratégias e grandes finais.",
    conteudo: "Os eSports envolvem jogadores profissionais, equipes técnicas, campeonatos e transmissões. Jogos como Valorant e Counter-Strike 2 possuem comunidades competitivas muito ativas.",
    imagem: "https://cdn.sanity.io/images/zoz4y99f/production/36ea605c0ff6e2c5356dcd6a4a09a9b26d0e7ac9-1600x900.jpg?w=1600&auto=format",
    data: "Especial eSports",
    fonte: ""
  }
];

// ELEMENTOS DO SITE

const grade = document.getElementById("gradeNoticias");
const pesquisa = document.getElementById("pesquisa");
const filtros = document.querySelectorAll(".filtro");
const semResultados = document.getElementById("semResultados");

const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menuToggle");

const modal = document.getElementById("modal");
const fecharModal = document.getElementById("fecharModal");
const fecharFundo = document.getElementById("fecharFundo");

const modalImagem = document.getElementById("modalImagem");
const modalCategoria = document.getElementById("modalCategoria");
const modalTitulo = document.getElementById("modalTitulo");
const modalDescricao = document.getElementById("modalDescricao");
const modalConteudo = document.getElementById("modalConteudo");
const modalFonte = document.getElementById("modalFonte");

let categoriaAtual = "todos";
let ultimoFoco = null;

const nomesCategorias = {
  filmes: "FILMES E SÉRIES",
  musica: "MÚSICA",
  games: "GAMES",
  esports: "eSPORTS",
  esportes: "ESPORTES"
};

// IMAGEM ALTERNATIVA CASO ALGUMA FALHE

const imagemAlternativa =
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&auto=format&fit=crop&q=80";

// PROTEÇÃO DE TEXTO INSERIDO NO HTML

function escaparHTML(texto) {
  return String(texto)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// CRIAR OS CARDS

function criarCard(noticia) {
  return `
    <article class="card">
      <div class="card-imagem">
        <img
          src="${escaparHTML(noticia.imagem)}"
          alt="${escaparHTML(noticia.titulo)}"
          loading="lazy"
          data-fallback="true"
        >
        <span class="card-categoria">
          ${nomesCategorias[noticia.categoria]}
        </span>
      </div>

      <div class="card-conteudo">
        <span class="card-data">
          ${escaparHTML(noticia.data)}
        </span>

        <h3>${escaparHTML(noticia.titulo)}</h3>

        <p>${escaparHTML(noticia.descricao)}</p>

        <button class="card-botao"
          data-noticia="${noticia.id}">
          LER MATÉRIA →
        </button>
      </div>
    </article>
  `;
}

// MOSTRAR NOTÍCIAS

function mostrarNoticias() {
  const termo = pesquisa.value.toLocaleLowerCase("pt-BR").trim();

  const resultados = noticias.filter(noticia => {
    const correspondeCategoria =
      categoriaAtual === "todos" ||
      noticia.categoria === categoriaAtual;

    const texto = (
      noticia.titulo + " " +
      noticia.descricao + " " +
      noticia.conteudo + " " +
      noticia.categoria
    ).toLocaleLowerCase("pt-BR");

    return correspondeCategoria && texto.includes(termo);
  });

  grade.innerHTML = resultados.map(criarCard).join("");
  semResultados.hidden = resultados.length > 0;
}

// FILTRAR POR CATEGORIA

function selecionarCategoria(categoria) {
  categoriaAtual = categoria;

  filtros.forEach(botao => {
    botao.classList.toggle(
      "ativo",
      botao.dataset.filtro === categoria
    );
  });

  mostrarNoticias();
}

filtros.forEach(botao => {
  botao.addEventListener("click", () => {
    selecionarCategoria(botao.dataset.filtro);
  });
});

// PESQUISAR

pesquisa.addEventListener("input", mostrarNoticias);

// ABRIR NOTÍCIA COMPLETA

function abrirNoticia(id) {
  const noticia = noticias.find(item => item.id === id);

  if (!noticia) return;

  ultimoFoco = document.activeElement;

  modalImagem.src = noticia.imagem;
  modalImagem.alt = noticia.titulo;

  modalCategoria.textContent =
    nomesCategorias[noticia.categoria];

  modalTitulo.textContent = noticia.titulo;
  modalDescricao.textContent = noticia.descricao;
  modalConteudo.textContent = noticia.conteudo;

  if (noticia.fonte) {
    modalFonte.href = noticia.fonte;
    modalFonte.hidden = false;
  } else {
    modalFonte.hidden = true;
    modalFonte.removeAttribute("href");
  }

  modal.hidden = false;
  document.body.classList.add("modal-aberto");
  fecharModal.focus();
}

// DELEGAÇÃO DE CLIQUES NOS CARDS

grade.addEventListener("click", evento => {
  const botao = evento.target.closest("[data-noticia]");

  if (!botao) return;

  abrirNoticia(Number(botao.dataset.noticia));
});

// FECHAR NOTÍCIA

function fecharNoticia() {
  modal.hidden = true;
  document.body.classList.remove("modal-aberto");

  if (ultimoFoco && ultimoFoco.isConnected) {
    ultimoFoco.focus();
  }
}

fecharModal.addEventListener("click", fecharNoticia);
fecharFundo.addEventListener("click", fecharNoticia);

document.addEventListener("keydown", evento => {
  if (evento.key === "Escape" && !modal.hidden) {
    fecharNoticia();
  }

  // Mantém o foco dentro da janela aberta
  if (evento.key === "Tab" && !modal.hidden) {
    const elementos = [...modal.querySelectorAll(
      'button, a[href], input, [tabindex]:not([tabindex="-1"])'
    )].filter(el => !el.hidden);

    const primeiro = elementos[0];
    const ultimo = elementos[elementos.length - 1];

    if (evento.shiftKey && document.activeElement === primeiro) {
      evento.preventDefault();
      ultimo.focus();
    } else if (!evento.shiftKey &&
               document.activeElement === ultimo) {
      evento.preventDefault();
      primeiro.focus();
    }
  }
});

// MENU MOBILE

function fecharMenu() {
  menu.classList.remove("aberto");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}

menuToggle.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");

  menuToggle.setAttribute("aria-expanded", String(aberto));
  menuToggle.textContent = aberto ? "×" : "☰";
});

// LINKS DAS CATEGORIAS NO MENU

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    const categoria = link.dataset.categoria;

    if (categoria) {
      pesquisa.value = "";
      selecionarCategoria(categoria);
    } else {
      pesquisa.value = "";
      selecionarCategoria("todos");
    }

    document.querySelectorAll(".menu a").forEach(item => {
      item.classList.remove("ativo");
    });

    link.classList.add("ativo");
    fecharMenu();
  });
});

// BOTÃO DE eSPORTS

document.getElementById("verEsports")
  .addEventListener("click", () => {
    pesquisa.value = "";
    selecionarCategoria("esports");
  });

// IMAGENS ALTERNATIVAS

document.addEventListener("error", evento => {
  const imagem = evento.target;

  if (
    imagem instanceof HTMLImageElement &&
    imagem.dataset.fallback === "true"
  ) {
    imagem.dataset.fallback = "false";
    imagem.src = imagemAlternativa;
  }
}, true);

modalImagem.addEventListener("error", () => {
  if (modalImagem.src !== imagemAlternativa) {
    modalImagem.src = imagemAlternativa;
  }
});

// ANO AUTOMÁTICO NO RODAPÉ

document.getElementById("ano").textContent =
  new Date().getFullYear();

// INICIAR SITE

mostrarNoticias();


// ===== FUNDO ANIMADO MARVEL E DC =====

const fundoHerois = document.getElementById("fundoHerois");

const logosMarvel = [
    "logos/marvel_1.png",
    "logos/marvel_2.png",
    "logos/marvel_3.png",
    "logos/marvel_4.png",
    "logos/Marvel_5.png"
];

const logosDC = [
    "logos/DC_1.png",
    "logos/DC_2.png",
    "logos/DC_3.png",
    "logos/DC_4.png",
    "logos/DC_5.png"
];

if (fundoHerois) {

    fundoHerois.innerHTML = "";

    // Cria várias fileiras diagonais
    for (let i = 0; i < 24; i++) {

        const faixa = document.createElement("div");
        faixa.className = "faixa";

        // Alterna Marvel e DC
        const logos = i % 2 === 0 ? logosMarvel : logosDC;

        // Distribui as fileiras pelo fundo
        faixa.style.top = `${i * 135 - 1400}px`;
        faixa.style.left = "-600px";

        // Movimento alternado
        faixa.style.animationDirection =
            i % 2 === 0 ? "alternate" : "alternate-reverse";

        faixa.style.animationDuration =
            `${18 + (i % 4) * 3}s`;

        // Adiciona os símbolos
        for (let j = 0; j < 24; j++) {

            const img = document.createElement("img");

            img.src = logos[j % logos.length];
            img.alt = "";

            faixa.appendChild(img);
        }

        fundoHerois.appendChild(faixa);
    }
}

// Criar fileiras animadas
if (fundoHerois) {

    for (let i = 0; i < 12; i++) {

        const faixa = document.createElement("div");
        faixa.classList.add("faixa");

        // Alternar Marvel e DC
        const logos = i % 2 === 0 ? logosMarvel : logosDC;

        // Posicionar as fileiras
        faixa.style.top = `${i * 140 - 500}px`;
        faixa.style.left = "-250px";

        // Alternar direção
        faixa.style.animationDirection =
            i % 2 === 0 ? "alternate" : "alternate-reverse";

        // Adicionar imagens
        for (let j = 0; j < 15; j++) {

            const img = document.createElement("img");

            img.src = logos[j % logos.length];
            img.alt = "";

            faixa.appendChild(img);
        }

        fundoHerois.appendChild(faixa);
    }
}
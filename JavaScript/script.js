/* ===================== DADOS DOS PERFIS ===================== */
const dadosPerfis = {
  pessoal: {
    role: "Desenvolvedor Multiplataforma",
    sobre: "Me chamo Gustavo, sou estudante de DSM na FATEC Marília. Venho aprendendo sobre programação e colocando esses conhecimentos em prática, com foco em desenvolvimento de sistemas e soluções funcionais.",
    sociais: [
      { nome: 'Github', icon: 'Icons/github.png.png', url: 'https://github.com/ElGustavito' },
      { nome: 'Linkedin', icon: 'Icons/linkedin.png.png', url: 'https://www.linkedin.com/in/gustavo-oliveira-745aa8364' },
      { nome: 'Instagram', icon: 'Icons/instagram.png.png', url: 'https://www.instagram.com/el_gustavlto/' }
    ],
    projetos: [
      { titulo: 'Portal de Receitas', desc: 'Uma plataforma completa que conecta culinaristas a clientes.', img: 'Imagens/Projetos/Portal-Receitas.png', link: 'processo.html' },
      { titulo: 'Dungeons & Math', desc: 'Em Desenvolvimento', img: 'Imagens/Projetos/Em-Breve.png', link: '#' },
      { titulo: 'Em Breve', desc: '...', img: 'Imagens/Projetos/Em-Breve.png', link: '#' }
    ]
  },
  arte: {
    role: "Artista Digital / Ilustrador",
    sobre: "Como artista autônomo, foco em criar ilustrações digitais com personalidade. Especializado em character design e artes inspiradas em animes e cultura pop.",
    sociais: [
      { nome: 'Instagram', icon: 'Icons/instagram.png.png', url: 'https://www.instagram.com/elgustavito_arts?igsh=cWpvejlhemNqbDJk' },
      { nome: 'X | Twitter', icon: 'Icons/x.png.png', url: 'https://x.com/ElGustavitoARTS' }, // Troque pelo seu link
      { nome: 'Tiktok', icon: 'Icons/tiktok.png.png', url: 'https://www.tiktok.com/@elgustavit0?_r=1&_t=ZS-965VsMc0b7k' }  // Troque pelo seu link
    ],
    projetos: [
      { titulo: 'Dungeons & Math', desc: 'Em Desenvolvimento', img: 'Imagens/Projetos/Em-Breve.png', link: '#' },
      { titulo: 'Em Breve', desc: '...', img: 'Imagens/Projetos/Em-Breve.png', link: '#' },
      { titulo: 'Em Breve', desc: '...', img: 'Imagens/Projetos/Em-Breve.png', link: '#' }
    ]
  }
};

const artes = [
  { img: 'Imagens/Arte/Eu-JJK.png', link: 'https://www.instagram.com/p/DJKoxxxSIb7/' },
  { img: 'Imagens/Arte/Jona.png', link: 'https://www.instagram.com/p/DFVgYYnR585/' },
  { img: 'Imagens/Arte/Veraz.png', link: 'https://www.instagram.com/p/DGRcjRfRV6v/' },
  { img: 'Imagens/Arte/Gih-JJK.png', link: 'https://www.instagram.com/p/DJPEYzVRSIf/' }
];

/* ===================== ELEMENTOS DOM ===================== */
const body = document.getElementById('mainBody');
const userRole = document.getElementById('userRole');
const sobreTexto = document.getElementById('sobreTexto');
const socialLinksContainer = document.getElementById('socialLinksContainer');
const listaProjetos = document.getElementById('listaProjetos');
const listaArte = document.getElementById('listaArte');
const arteBox = document.getElementById('arteBox');

/* ===================== LÓGICA DE ATUALIZAÇÃO ===================== */

function carregarPerfil(modo) {
  const dados = dadosPerfis[modo];

  // Atualiza Role e Texto Sobre
  userRole.innerText = dados.role;
  sobreTexto.innerText = dados.sobre;

  // Atualiza Botões Sociais
  socialLinksContainer.innerHTML = '';
  dados.sociais.forEach(social => {
    const btn = document.createElement('button');
    btn.className = 'social-btn';
    btn.onclick = () => window.open(social.url, '_blank');
    btn.innerHTML = `<img src="${social.icon}" /> ${social.nome}`;
    socialLinksContainer.appendChild(btn);
  });

  // Atualiza Lista de Projetos
  listaProjetos.innerHTML = '';
  dados.projetos.forEach(p => {
    const card = document.createElement('a');
    card.href = p.link;
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${p.img}">
      <div>
        <h3>${p.titulo}</h3>
        <p>${p.desc}</p>
      </div>
    `;
    listaProjetos.appendChild(card);
  });
}

function renderArtes() {
  listaArte.innerHTML = '';
  artes.forEach(a => {
    const item = document.createElement('div');
    item.className = 'art-item';
    item.onclick = () => { if(a.link !== '#') window.open(a.link, '_blank'); };
    item.innerHTML = `<img src="${a.img}" alt="Arte">`;
    listaArte.appendChild(item);
  });
}

/* ===================== CLIQUES NOS AVATARES ===================== */
document.getElementById('btnPessoal').onclick = function() {
  body.className = 'mode-pessoal';
  this.classList.add('active-option');
  document.getElementById('btnArte').classList.remove('active-option');
  document.getElementById('imgPessoal').classList.add('active-img');
  document.getElementById('imgArte').classList.remove('active-img');
  
  arteBox.classList.add('hidden');
  carregarPerfil('pessoal');
};

document.getElementById('btnArte').onclick = function() {
  body.className = 'mode-arte';
  this.classList.add('active-option');
  document.getElementById('btnPessoal').classList.remove('active-option');
  document.getElementById('imgArte').classList.add('active-img');
  document.getElementById('imgPessoal').classList.remove('active-img');
  
  arteBox.classList.remove('hidden');
  carregarPerfil('arte');
  renderArtes();
};

/* ===================== ACORDEÃO ===================== */
document.querySelectorAll('.panel-header').forEach(header => {
  header.addEventListener('click', () => {
    const box = header.parentElement;
    box.classList.toggle('active-panel');
    const arrow = header.querySelector('.icon-arrow');
    arrow.src = box.classList.contains('active-panel') ? 'Icons/seta-cima.png.png' : 'Icons/seta-direita.png.png';
  });
});

/* ===================== INICIALIZAÇÃO ===================== */
carregarPerfil('pessoal'); // Inicia com o modo programador
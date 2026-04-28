/* ===================== DADOS ===================== */
const projetos = [
  { 
    titulo: 'Portal de Receitas', 
    desc: 'Uma plataforma completa que conecta culinaristas a clientes, oferecendo produtividade, fichas técnicas e uso simplificado.', 
    img: 'Imagens/Projetos/Portal-Receitas.png', 
    link: 'processo.html' 
  },
  { titulo: 'Em Breve',
    desc: '...',
    img: 'Imagens/Projetos/Em-Breve.png',
    link: '#'
  },
  { titulo: 'Em Breve',
    desc: '...',
    img: 'Imagens/Projetos/Em-Breve.png',
    link: '#' 
  }
];

const artes = [
  { img: 'Imagens/Arte/Eu-JJK.png', link: 'https://www.instagram.com/p/DJKoxxxSIb7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { img: 'Imagens/Arte/Jona.png', link: 'https://www.instagram.com/p/DFVgYYnR585/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { img: 'Imagens/Arte/Veraz.png', link: 'https://www.instagram.com/p/DGRcjRfRV6v/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { img: 'Imagens/Arte/Gih-JJK.png', link: 'https://www.instagram.com/p/DJPEYzVRSIf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' }
];

/* ===================== ELEMENTOS ===================== */
const body = document.getElementById('mainBody');
const btnPessoal = document.getElementById('btnPessoal');
const btnArte = document.getElementById('btnArte');
const arteBox = document.getElementById('arteBox');
const listaProjetos = document.getElementById('listaProjetos');
const listaArte = document.getElementById('listaArte'); // O ID do contêiner da grade

/* ===================== LÓGICA DO ACORDEÃO ===================== */
document.querySelectorAll('.panel-header').forEach(header => {
  header.addEventListener('click', () => {
    const box = header.parentElement;
    box.classList.toggle('active-panel');
    
    // Altera ícone da seta
    const arrow = header.querySelector('.icon-arrow');
    if(box.classList.contains('active-panel')) {
        arrow.src = 'Icons/seta-cima.png.png'; 
    } else {
        arrow.src = 'Icons/seta-direita.png.png';
    }
  });
});

/* ===================== FUNÇÕES DE RENDERIZAÇÃO ===================== */
function renderProjetos() {
  listaProjetos.innerHTML = '';
  projetos.forEach(p => {
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
    item.onclick = () => {
        if(a.link !== '#') window.open(a.link, '_blank');
    };
    item.innerHTML = `<img src="${a.img}" alt="Arte">`;
    listaArte.appendChild(item);
  });
}

/* ===================== TROCA DE PERFIL (PESSOAL / ARTE) ===================== */
btnPessoal.onclick = () => {
  body.className = 'mode-pessoal';
  btnPessoal.classList.add('active-option');
  btnArte.classList.remove('active-option');
  
  document.getElementById('imgPessoal').classList.add('active-img');
  document.getElementById('imgArte').classList.remove('active-img');
  
  arteBox.classList.add('hidden');
};

btnArte.onclick = () => {
  body.className = 'mode-arte';
  btnArte.classList.add('active-option');
  btnPessoal.classList.remove('active-option');
  
  document.getElementById('imgArte').classList.add('active-img');
  document.getElementById('imgPessoal').classList.remove('active-img');
  
  arteBox.classList.remove('hidden');
  renderArtes();
};

/* ===================== INICIALIZAÇÃO ===================== */
// Renderiza os projetos ao carregar a página
renderProjetos();
/* ===================== ELEMENTOS ===================== */

const btnPessoal = document.getElementById('btnPessoal');
const btnArte = document.getElementById('btnArte');
const painelPessoal = document.getElementById('painelPessoal');

const imgPessoal = document.getElementById('imgPessoal');
const imgArte = document.getElementById('imgArte');

const sobreBox = document.getElementById('sobreBox');
const sobreTexto = document.getElementById('sobreTexto');
const setaSobre = document.getElementById('setaSobre');

const projetosBox = document.getElementById('projetosBox');
const listaProjetos = document.getElementById('listaProjetos');
const setaProjetos = document.getElementById('setaProjetos');

/* ===================== FUNÇÕES ===================== */

function setActiveOption(selected, other) {
  selected.classList.add('active-option');
  other.classList.remove('active-option');
}

function setActiveImage(selected, other) {
  selected.classList.add('active-img');
  other.classList.remove('active-img');
}

function setActivePanel(panel) {
  [sobreBox, projetosBox].forEach(p =>
    p.classList.remove('active-panel')
  );
  panel.classList.add('active-panel');
}

/* ===================== TROCA DE PERFIL ===================== */

btnPessoal.onclick = () => {
  painelPessoal.classList.remove('hidden');
  setActiveOption(btnPessoal, btnArte);
  setActiveImage(imgPessoal, imgArte);
};

btnArte.onclick = () => {
  painelPessoal.classList.add('hidden');
  setActiveOption(btnArte, btnPessoal);
  setActiveImage(imgArte, imgPessoal);
};

/* ===================== SOBRE ===================== */

let sobreAberto = true;

sobreBox.addEventListener('click', (e) => {
  if (e.target === projetosBox) return;

  sobreAberto = !sobreAberto;
  setActivePanel(sobreBox);

  if (sobreAberto) {
    sobreTexto.classList.remove('hidden');
    listaProjetos.classList.add('hidden');
    setaSobre.src = 'Icons/seta-cima.png.png';
    setaProjetos.src = 'Icons/seta-direita.png.png';
  } else {
    sobreTexto.classList.add('hidden');
    setaSobre.src = 'Icons/seta-direita.png.png';
  }
});

/* ===================== PROJETOS ===================== */

projetosBox.addEventListener('click', () => {
  listaProjetos.classList.remove('hidden');
  sobreTexto.classList.add('hidden');
  setaSobre.src = 'Icons/seta-direita.png.png';
  setaProjetos.src = 'Icons/seta-cima.png.png';
  sobreAberto = false;
  setActivePanel(projetosBox);
});

/* ===================== DADOS DOS PROJETOS ===================== */

const projetos = [
  {
    titulo: 'Portal de Receitas',
    descricao:
      'Uma plataforma completa que conecta culinaristas a clientes, oferecendo produtividade, fichas técnicas e uso simplificado.',
    imagem: 'Imagens/Portal-Receitas.png',
    link: 'processo.html'
  },
  {
    titulo: 'Em Breve',
    descricao: '...',
    imagem: 'Imagens/Em-Breve.png',
    link: '#'
  },
  {
    titulo: 'Em Breve',
    descricao: '...',
    imagem: 'Imagens/Em-Breve.png',
    link: '#'
  }
];

/* ===================== RENDERIZAÇÃO ===================== */

function renderProjetos() {
  listaProjetos.innerHTML = '';

  projetos.forEach(p => {
    const card = document.createElement('a');
    card.href = p.link;
    card.target = '_blank';
    card.className =
      'project-card bg-[#111827] border border-gray-700 p-3 flex gap-4 items-center rounded-xl hover:border-orange-500';

    card.innerHTML = `
      <img src="${p.imagem}" class="w-24 h-24 object-cover rounded-lg" />
      <div>
        <h3 class="font-semibold text-gray-100">${p.titulo}</h3>
        <p class="text-sm text-gray-400">${p.descricao}</p>
      </div>
    `;

    listaProjetos.appendChild(card);
  });
}

/* ===================== INIT ===================== */

renderProjetos();
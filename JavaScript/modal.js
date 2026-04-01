// Seleciona elementos do modal
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// Seleciona TODOS os botões de visualizar imagem
const viewButtons = document.querySelectorAll(".view-btn");

// Para cada botão, abre o modal com a imagem correspondente
viewButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const imgSrc = btn.getAttribute("data-img");
    modalImg.src = imgSrc;
    modal.classList.add("open");
  });
});

// Botão de fechar
closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});

// Fechar clicando fora da imagem
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("open");
  }
});

// Fechar com tecla ESC
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.classList.remove("open");
  }
});
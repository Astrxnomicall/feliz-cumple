// Generar los 16 pétalos con distintos ángulos
const flor = document.getElementById("flor");

for (let i = 0; i < 16; i++) {
  const petalo = document.createElement("div");
  petalo.classList.add("petalo");
  const angle = i * (360 / 16); // cada 22.5 grados
  petalo.style.setProperty('--angle', `${angle}deg`);
  flor.appendChild(petalo);
}

// Animación con scroll
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxY = document.body.scrollHeight - window.innerHeight;

  // Abrir flor entre 100px y 90% del scroll
  if (scrollY > 100 && scrollY < maxY - 300) {
    flor.classList.add("abierta");
  } else {
    flor.classList.remove("abierta");
  }
});

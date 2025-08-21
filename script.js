const petalos = document.querySelectorAll('.petalo');
const raicesGroup = document.getElementById('raices');

// Generar raíces curvas con SVG
function crearRaices() {
  const raices = [];
  for (let i = 0; i < 12; i++) {
    let x1 = 100, y1 = 100;
    let x2 = Math.random() * 200, y2 = Math.random() * 200;
    let cx = (x1 + x2) / 2 + (Math.random() * 50 - 25);
    let cy = (y1 + y2) / 2 + (Math.random() * 50 - 25);

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`);
    path.setAttribute("stroke-dasharray", 500);
    path.setAttribute("stroke-dashoffset", 500);
    raicesGroup.appendChild(path);
    raices.push(path);
  }
  return raices;
}

const raices = crearRaices();

// Animación con scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progreso = Math.min(scrollY / maxScroll, 1);

  // Abrir pétalos
  petalos.forEach((petalo, i) => {
    const angulo = (i - 2) * 15 * progreso;
    petalo.style.transform = `rotate(${angulo}deg) scale(${1 + 0.2 * progreso})`;
  });

  // Animar raíces
  raices.forEach(r => {
    r.style.opacity = progreso;
    r.style.strokeDashoffset = 500 - 500 * progreso;
  });
});




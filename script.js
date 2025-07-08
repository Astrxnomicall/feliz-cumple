const flor = document.querySelector(".flor");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxY = document.body.scrollHeight - window.innerHeight;

  if (scrollY > 50 && scrollY < maxY - 200) {
    flor.classList.add("abierta");
  } else {
    flor.classList.remove("abierta");
  }
});

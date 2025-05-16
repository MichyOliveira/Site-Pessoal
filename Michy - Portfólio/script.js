document.addEventListener("mousemove", (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (e.clientX - centerX) / 100;
    const offsetY = (e.clientY - centerY) / 100;

    document.getElementById("plan1").style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    document.getElementById("plan2").style.transform = `translate(${offsetX * 1.5}px, ${offsetY * 1.5}px)`;
    document.getElementById("plan3").style.transform = `translate(${offsetX * 2}px, ${offsetY * 2}px)`;
    document.getElementById("text").style.transform = `translate(${offsetX * 0.5}px, ${offsetY * 0.5}px)`;
});

document.addEventListener("mousemove", (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (e.clientX - centerX) / 100;
    const offsetY = (e.clientY - centerY) / 100;

    document.getElementById("plano1").style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    document.getElementById("plano2").style.transform = `translate(${offsetX * 1.5}px, ${offsetY * 1.5}px)`;
    document.getElementById("plano3").style.transform = `translate(${offsetX * 2}px, ${offsetY * 2}px)`;
    document.getElementById("plano4").style.transform = `translate(${offsetX * 2}px, ${offsetY * 2}px)`;
    document.getElementById("plano5").style.transform = `translate(${offsetX * 2}px, ${offsetY * 2}px)`;
    document.getElementById("plano6").style.transform = `translate(${offsetX * 2}px, ${offsetY * 2}px)`;
});

// Suavizar a rolagem ao clicar nos links de navegação
const links = document.querySelectorAll('.navigation a');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});
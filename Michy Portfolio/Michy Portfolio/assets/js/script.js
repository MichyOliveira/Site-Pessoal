
  
// Suavizar a rolagem ao clicar nos links de navegação
const links = document.querySelectorAll('.nav-links a');

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


// Animação de rolagem para fazer elementos aparecerem
document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('visible'); // Adiciona a classe 'visible' quando o elemento entra na tela
      } else {
        element.classList.remove('visible'); // Remove a classe 'visible' se o elemento sair da tela
      }
    });
  });
  
  // Efeito de botão para voltar ao topo
  const btnTop = document.getElementById('btnTop');
  
  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btnTop.style.display = "block";
    } else {
      btnTop.style.display = "none";
    }
  };
  
  btnTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
const elementos = document.querySelectorAll('.fade-in');

function mostrarElementos() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;

    if (posicao < alturaTela * 0.85) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
}

// roda várias vezes (garante que funcione)
window.addEventListener('load', mostrarElementos);
window.addEventListener('scroll', mostrarElementos);
window.addEventListener('resize', mostrarElementos);
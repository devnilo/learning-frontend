const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

for (let i = 0; i < listaDeTeclas.length; i++) {
    
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = () => {
        tocaSom(idAudio)
    };

// adicionando onkey para ter a mesma animação que o onclick tem ao usar o enter
    tecla.onkeydown = (evento) => {
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }
}
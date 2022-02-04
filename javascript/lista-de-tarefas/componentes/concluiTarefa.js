const BotaoConclui = () => {
    const concluiBotao = document.createElement('button')

    concluiBotao.classList.add('check-button')
    concluiBotao.innerText = 'concluir'

    concluiBotao.addEventListener('click', concluirTarefa)

    return concluiBotao
}

const concluirTarefa = (evento) => {
    const concluiBotao = evento.target
    const tarefaCompleta = concluiBotao.parentElement

    tarefaCompleta.classList.toggle('done')
}
const BotaoDeleta = () => {
    const deletaBotao = document.createElement('button')
    
    deletaBotao.classList.add('delete-button')
    deletaBotao.innerText = 'deletar'

    deletaBotao.addEventListener('click', deletarTarefa)

    return deletaBotao
}

const deletarTarefa = (evento) => {
    const deletaBotao = evento.target
    const tarefaCompleta = deletaBotao.parentElement

    tarefaCompleta.remove()

    return deletaBotao
}

export default BotaoDeleta
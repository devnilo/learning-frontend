/* utilizar a “IIFE”, ou Immediately Invoked Function Expression ou “Função de Invocação Imediata”. */

// utilizando a arrow function no código inteiro para deixar o código anônimo

( () => {
    const criarTarefa = (evento) => {
    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')

    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    input.value = ""
    }

    const novaTarefa = document.querySelector('[data-form-button]')

    novaTarefa.addEventListener('click', criarTarefa)

//

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

}) ()


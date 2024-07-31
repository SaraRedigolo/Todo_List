const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector('.list-tasks');

let minhaListaDeItens = [];

function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()
    
}

function mostrarTarefas() {
    let novaLi = '';

    minhaListaDeItens.forEach((item, posicao) => {
        novaLi += `
            <li class="task ${item.concluida && "done"}">
                <img src="./img/checkend.png" alt="check-na-tarefa" class="checkend" onclick="concluirTarefa(${posicao})">
                <p>${item.tarefa}</p>
                <img src="./img/trash.png" alt="tarefa-para-o-lixo" class="trash" onclick="deletarItem(${posicao})">
            </li>
        `;
    });

    listaCompleta.innerHTML = novaLi;

    localStorage.setItem('lista',JSON.stringify(minhaListaDeItens))
}

function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostrarTarefas()

}


function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)
    
    mostrarTarefas()
}

function recarregarTarefas(){
    const taresdoLocalStorage = localStorage.getItem('lista')

    if(taresdoLocalStorage){
    minhaListaDeItens = JSON.parse(taresdoLocalStorage)
    }
    
    mostrarTarefas()
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa);

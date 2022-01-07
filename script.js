function Add() {
    let textInput = document.querySelector('#texto-tarefa');
    let addButton = document.querySelector('#criar-tarefa');
    let listTask = document.querySelector('#lista-tarefas');

    addButton.addEventListener('click', () => {
        if (textInput.value.length > 0) {
            const newLi = document.createElement('li');
            newLi.className = 'tarefa';
            newLi.innerText = textInput.value;

            listTask.appendChild(newLi);
            textInput.value = '';
        } else {
            alert('Error: Digite ao menos 1 caractere.');
        }
    });
}

Add();

function changeBackground() {
    let listTask = document.querySelector('#lista-tarefas');
    let listItem = document.getElementsByClassName('tarefa');

    listTask.addEventListener('click', (e) => {
        for (let i = 0; i < listItem.length; i += 1) {
            listItem[i].style.backgroundColor = '';
            listItem[i].id = '';
            e.target.style.backgroundColor = 'rgb(128,128,128)';
            e.target.id = 'selected';
        }
    });
}

changeBackground();

function lineThrough() {
    let listTask = document.querySelector('#lista-tarefas');

    listTask.addEventListener('dblclick', (e) => {
        if (e.target.className === 'tarefa') {
            e.target.className = 'tarefa completed';
        } else {
            e.target.className = 'tarefa';
        }
    });
}

lineThrough();

function buttonClearTasks() {
    let buttonClear = document.querySelector('#apaga-tudo');
    let listTask = document.querySelector('#lista-tarefas');

    buttonClear.addEventListener('click', function() {
        listTask.innerHTML = '';
    });
}

buttonClearTasks();

function buttonRemoveCompleted() {
    let buttonRemove = document.querySelector('#remover-finalizados');

    buttonRemove.addEventListener('click', function() {
        let listItem = document.getElementsByTagName('li');

        // lógica sugerida por Danny turmaC e Lalá turmaA
        for (let i = listItem.length - 1; i >= 0; i -= 1) {
            if (listItem[i].className === 'tarefa completed') {
                listItem[i].remove();
            }
        }


    });
}

buttonRemoveCompleted();

function saveButton() {

    let btnsave = document.getElementById('salvar-tarefas');

    btnsave.addEventListener('click', function() {

        let listSaved = document.getElementById('lista-tarefas');
        localStorage.setItem('list', listSaved.innerHTML);
    })

}

saveButton();

window.onload = function() {

    let listSaved = document.getElementById('lista-tarefas');
    listSaved.innerHTML = localStorage.getItem('list');

}

function buttonClear() {

    const btnRemove = document.getElementById('remover-selecionado');

    btnRemove.addEventListener('click', function() {

        let listItem = document.getElementsByTagName('li');

        // lógica sugerida por Danny turmaC e Lalá turmaA
        for (let i = listItem.length - 1; i >= 0; i -= 1) {
            if (listItem[i].id === 'selected') {
                listItem[i].remove();
            }
        }


    })
}

buttonClear();
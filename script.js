function Add() {
    let textInput = document.querySelector('#texto-tarefa');
    let addButton = document.querySelector('#criar-tarefa');
    let listTask = document.querySelector('#lista-tarefas');

    addButton.addEventListener('click', function() {
        if (textInput.value.length > 0) {
            let newLi = document.createElement('li');
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

    listTask.addEventListener('click', function(e) {
        for (let i = 0; i < listItem.length; i += 1) {
            listItem[i].style.backgroundColor = '';
            e.target.style.backgroundColor = 'rgb(128,128,128)';
        }
    });
}

changeBackground();

function lineThrough() {
    let listTask = document.querySelector('#lista-tarefas');

    listTask.addEventListener('dblclick', function(e) {
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
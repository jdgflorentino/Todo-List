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
    let bgColor = 'white';

    listTask.addEventListener('click', function(e) {

        for (let i = 0; i < listItem.length; i += 1) {
            listItem[i].style.backgroundColor = '';
            e.target.style.backgroundColor = 'rgb(128,128,128)';
        }
    })
};

changeBackground();
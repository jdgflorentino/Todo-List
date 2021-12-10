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
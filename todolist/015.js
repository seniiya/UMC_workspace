document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    const completedList = document.getElementById('completedList');

    
    todoForm.addEventListener('submit', function (e) { 
        e.preventDefault(); 
        const todoText = todoInput.value.trim(); 
        if (todoText !== '') {
            addTodoItem(todoText); 
            todoInput.value = ''; 
        }
    });

   
    function addTodoItem(todoText) {
        const todoItem = document.createElement('li'); 
        const todoContent = document.createTextNode(todoText); 
        todoItem.appendChild(todoContent);  

        const completeBtn = document.createElement('button'); 
        completeBtn.textContent = '완료'; 
        completeBtn.addEventListener('click', function () { 
            completeTodoItem(todoItem); 
        });
        todoItem.appendChild(completeBtn);  

        todoList.appendChild(todoItem); 
    }

   
    function completeTodoItem(todoItem) {
        const deleteBtn = document.createElement('button'); 
        deleteBtn.textContent = '삭제';

        const completedItem = todoItem.cloneNode(true);     // 할 일 아이템 복제
        completedItem.removeChild(completedItem.lastChild);  // 복제된 아이템에서 완료 버튼 제거
        completedItem.appendChild(deleteBtn);   // 복제된 아이템에 삭제 버튼 추가
        completedList.appendChild(completedItem);   // 해낸 일 목록에 추가 

        todoItem.parentNode.removeChild(todoItem);  // 해야 할 일 목록에서 삭제 
    }

    completedList.addEventListener('click', function (e) {
        if (e.target.textContent === '삭제') {
            e.target.parentNode.remove();   
        }
    });
});
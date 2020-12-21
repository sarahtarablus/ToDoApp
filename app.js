const input = document.getElementById('new-task');
const addBtn = document.getElementById('addTask-btn');
const list = document.querySelector('.list');
const clearBtn =  document.getElementById('clear-btn');



addBtn.addEventListener('click', addNewTask);
list.addEventListener('click', removeTask);
list.addEventListener('click', crossTask);
clearBtn.addEventListener('click', clearTasks);

function addNewTask(e){
  e.preventDefault();
  if(input.value !== ''){
    const li = document.createElement('li');
    li.className = 'list-item';
    li.appendChild(document.createTextNode(input.value));
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.className = 'check-box';
    li.appendChild(checkBox);
    const x = document.createElement('a');
    x.className = 'delete-btn';
    x.innerHTML = 'X'
    x.style.backgroundColor = 'rgb(255, 204, 94)';
    x.style.color = 'white';
    x.style.cursor = 'pointer';
    li.appendChild(x);
    list.appendChild(li);

    clearBtn.style.display = 'block';
    
    
    setTaskToLocalStorage(input.value);

  } else {
    alert('Make sure to add a task!');
  }
  input.value = '';
}

/*function alertMessage(msg){
  const div = document.createElement('div');
  div.className = 'message';
  div.appendChild(document.createTextNode(msg));

  const container = document.querySelector('.container-1');
  const container2 = document.querySelector('.container-2');
  container2.insertBefore(div, container);
}*/

function removeTask(e){
  if(e.target.classList.contains('delete-btn')){
    e.target.parentElement.remove();
  }
}

function crossTask(e){
  if(e.target.classList.contains('check-box')){
    const li = e.target.parentElement;
    li.style.textDecoration = 'line-through';
    /*e.target.siblingChild.contains('delete-btn')
      const x = e.target.siblingChild;
      x.style.textDecoration = 'none';*/
    }
  }

function clearTasks(){
  while(list.firstChild){
    list.removeChild(list.firstChild);
    clearBtn.style.display = 'none';
  }
}


 
function setTaskToLocalStorage(task){
 if(localStorage.getItem('tasks') === ''){
  let tasks = [];
  tasks.push(task);
  let stringifiedTasks = JSON.stringify(tasks);
  localStorage.setItem('tasks', stringifiedTasks);
    
 }else{
  tasks = localStorage.getItem('tasks');
  let newTasks = JSON.parse(tasks);
  newTasks.push(task);
  let stringifiedTasks = JSON.stringify(newTasks);
  localStorage.setItem('tasks', stringifiedTasks); 
 }
} 





// Select the New Task Form
const newTaskForm = document.querySelector('#newTaskForm');

// Add an 'onsubmit' event listener
newTaskForm.addEventListener('submit', (event) => {

  event.preventDefault();
    
  // Select the inputs
  const newTaskNameInput = document.querySelector('#newTaskNameInput');
  const newTaskDescription = document.querySelector('#newTaskDescription');
  const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
  const newTaskDueDate = document.querySelector('#newTaskDueDate');

  /*
      Pass the inputs to the validation function. Returned value is boolean.
  */
  const isValid = validateTaskForm(newTaskNameInput, newTaskDescription, newTaskAssignedTo, newTaskDueDate);

  /* 
    If isValid is true, then call the addTask method on the taskManager class,
    else show error messages on the form for inputs that do not pass the validation.
  */
  
});

function validateTaskForm(name, description, assignedto, duedate) {
  if(name.value.length < 8) {
    return false;
  }
  /* 
    You do the rest
  */ 
}

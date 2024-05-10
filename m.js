const taskForm = document.getElementById('taskForm');
const taskTitleInput = document.getElementById('taskTitle');
const taskDescriptionInput = document.getElementById('taskDescription');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = taskTitleInput.value.trim();
  const description = taskDescriptionInput.value.trim();

  if (!title) {
    alert('Please enter a task title.');
    return;
  }

  const taskItem = createTaskElement(title, description);
  taskList.appendChild(taskItem);

  taskTitleInput.value = '';
  taskDescriptionInput.value = '';
});

function createTaskElement(title, description) {
  const li = document.createElement('li');
  li.className = 'bg-white rounded-md p-3 shadow-md';
  li.innerHTML = `
    <h3 class="font-semibold">${title}</h3>
    <p>${description}</p>
    <div class="flex justify-end mt-2">
      <button class="px-2 py-1 bg-green-500 text-white rounded-md mr-2">Complete</button>
      <button class="px-2 py-1 bg-red-500 text-white rounded-md">Delete</button>
    </div>
  `;

  const completeButton = li.querySelector('.bg-green-500');
  const deleteButton = li.querySelector('.bg-red-500');

  completeButton.addEventListener('click', function() {
    li.classList.toggle('opacity-50');
  });

  deleteButton.addEventListener('click', function() {
    li.remove();
  });

  return li;
}

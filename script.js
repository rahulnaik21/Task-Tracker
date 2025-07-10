const taskinput = document.querySelector("#newtask input");
const taskSection = document.querySelector(".tasks");

taskinput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") createTask();
});

document.querySelector('#push').onclick = function () {
  createTask();
};

function createTask() {
  if (taskinput.value.trim().length === 0) {
    alert("The task field is blank. Enter a task name and try again.");
  } else {
    taskSection.innerHTML += `
      <div class="task">
        <label id="taskname">
          <input onclick="updateTask(this)" type="checkbox" id="check-task">
          <p>${taskinput.value}</p>
        </label>
        <div class="delete">
          <i class="uil uil-trash"></i>
        </div>
      </div>`;

    const current_tasks = document.querySelectorAll(".delete");
    current_tasks.forEach((task) => {
      task.onclick = function () {
        this.parentNode.remove();
      };
    });

    taskSection.offsetHeight >= 300
      ? taskSection.classList.add("overflow")
      : taskSection.classList.remove("overflow");
  }
}

function updateTask(task) {
  let taskItem = task.nextElementSibling;
  if (task.checked) {
    taskItem.classList.add("checked");
  } else {
    taskItem.classList.remove("checked");
  }
}

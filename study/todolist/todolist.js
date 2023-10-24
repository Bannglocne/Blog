document.addEventListener("DOMContentLoaded", function () {
    const addTaskButton = document.getElementById("addTask");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <input type="checkbox">
                <span>${taskText}</span>
                <button class="delete">Xóa</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";

            // Xử lý sự kiện đánh dấu nhiệm vụ đã hoàn thành
            const checkbox = listItem.querySelector("input[type='checkbox']");
            checkbox.addEventListener("change", function () {
                listItem.classList.toggle("completed");
            });

            // Xử lý sự kiện xóa nhiệm vụ
            const deleteButton = listItem.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(listItem);
            });
        }
    });
});

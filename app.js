"use strict";

const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;
    if (!task) {
        alert("Enter a valid task !");
    } 
    else
    {
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_el_content = document.createElement("div");
        task_el_content.classList.add("content");

        task_el.appendChild(task_el_content);

        const task_input = document.createElement("input");
        task_input.classList.add("text");
        task_input.type = "text";
        task_input.value = task;
        // console.log(task);
        task_input.setAttribute("readonly", "readonly");

        task_el_content.appendChild(task_input);

        //adding the created task to list
        list_el.appendChild(task_el);

        const task_actions = document.createElement("div");
        task_actions.classList.add("actions");

        const task_actions_edit = document.createElement("button");
        task_actions_edit.classList.add("edit");
        task_actions_edit.innerText = "Edit";

        const task_actions_delete = document.createElement("button");
        task_actions_delete.classList.add("delete");
        task_actions_delete.innerText = "Delete";

        task_actions.appendChild(task_actions_edit);
        task_actions.appendChild(task_actions_delete);

        //adding the buttons to task div
        task_el.appendChild(task_actions);

        task_actions_edit.addEventListener("click", () => {
            if (task_actions_edit.innerText.toLowerCase() == "edit") {
                task_actions_edit.innerText = "Save";
                task_actions_edit.removeAttribute("readonly");
                task_actions_edit.focus();
            } else {
                task_actions_edit.innerText = "Edit";
                task_actions_edit.setAttribute("readonly", "readonly");
            }
        });

        task_actions_delete.addEventListener("click", () => {
            list_el.removeChild(task_el);
        });
    }
});

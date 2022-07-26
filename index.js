window.addEventListener("load", () => {
    const form = document.querySelector("#todo-form");
    const input = document.querySelector("#todo-form-text");
    const todosElements = document.querySelector("#todos-to-do");
    const todosDoneElements = document.querySelector("#todos-done");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputNewValue = input.value;

        if(inputNewValue == ""){
            alert("Please fill 'What you wanna do?'");
            return;
        }

        const todoElement = document.createElement("div");
        todoElement.classList.add("todo");

        const todoContentElement = document.createElement("div");
        todoContentElement.classList.add("content");

        const todoContentChange = document.createElement("i");
        todoContentChange.classList.add("fas");
        todoContentChange.classList.add("fa-check");
        todoContentChange.classList.add("check");

        const todoContentInput = document.createElement("input");
        todoContentInput.classList.add("todo-text");
        todoContentInput.type = "text";
        todoContentInput.value = inputNewValue;
        todoContentInput.setAttribute("readonly", "readonly");

        const todoContentEdit = document.createElement("i");
        todoContentEdit.classList.add("fas");
        todoContentEdit.classList.add("fa-pencil");
        todoContentEdit.classList.add("pencil");

        const todoContentTrash = document.createElement("i");
        todoContentTrash.classList.add("fas");
        todoContentTrash.classList.add("fa-trash-can");
        todoContentTrash.classList.add("trash");

        const todoContentReply = document.createElement("i");
        todoContentReply.classList.add("fas");
        todoContentReply.classList.add("fa-reply");
        todoContentReply.classList.add("reply");

        const todoContentDisk = document.createElement("i");
        todoContentDisk.classList.add("fas");
        todoContentDisk.classList.add("fa-floppy-disk");
        todoContentDisk.classList.add("disk");

        todoContentElement.appendChild(todoContentChange);

        todoContentElement.appendChild(todoContentInput);

        todoContentElement.appendChild(todoContentEdit);

        todoContentElement.appendChild(todoContentTrash);

        todoElement.appendChild(todoContentElement);

        todosElements.appendChild(todoElement);

        input.value = "";

        todoContentEdit.addEventListener("click", () => {
            if (todoContentEdit.classList.contains("pencil")) {
                todoContentInput.removeAttribute("readonly");
                todoContentInput.focus();

                todoContentEdit.classList.remove("fa-pencil");
                todoContentEdit.classList.remove("pencil");

                todoContentEdit.classList.add("fa-floppy-disk");
                todoContentEdit.classList.add("disk");
            } else {
                todoContentInput.setAttribute("readonly", "readonly");

                todoContentEdit.classList.remove("fa-floppy-disk");
                todoContentEdit.classList.remove("disk");

                todoContentEdit.classList.add("fa-pencil");
                todoContentEdit.classList.add("pencil");
            }
        });

        todoContentTrash.addEventListener("click", () => {
            if(todoElement.parentElement.id == "todos-to-do"){
                todosElements.removeChild(todoElement);
            }else{
                todosDoneElements.removeChild(todoElement);
            }

            
        });

        todoContentChange.addEventListener("click", () => {
            if (todoContentChange.classList.contains("check")) {
                todosElements.removeChild(todoElement);

                todoContentChange.classList.remove("fa-check");
                todoContentChange.classList.remove("check");

                todoContentChange.classList.add("fa-reply");
                todoContentChange.classList.add("reply");

                todosDoneElements.appendChild(todoElement);
            } else {
                todosDoneElements.removeChild(todoElement);

                todoContentChange.classList.remove("fa-reply");
                todoContentChange.classList.remove("reply");

                todoContentChange.classList.add("fa-check");
                todoContentChange.classList.add("check");

                todosElements.appendChild(todoElement);
            }
        });

    });
});
function solve() {
    const formRef = document.querySelector('form');
    const [addTask, openTask, inProgress, complete] = document.querySelectorAll("section");

    btnHandlerEnum = {
        start: function (e) {
            let currArticle = e.target.parentElement.parentElement;
            removeBtn(e.target.parentElement);
            currArticle.innerHTML += getBtnPartial({classes: "red", text: "Delete"}, {classes: "orange", text: "Finish"});
            let btns = currArticle.querySelectorAll('button');
            addEventListenerToButton(btns);
            inProgress.children[1].appendChild(currArticle);
        },
        finish: function (e) {
            let currArticle = e.target.parentElement.parentElement;
            removeBtn(e.target.parentElement);
            complete.children[1].appendChild(currArticle);
        },
        delete: function (e) {
            e.target.parentElement.parentElement.remove();
        }
    }

    formRef.addEventListener('submit', onSubmitHandler);

    function onSubmitHandler(e) {
        e.preventDefault();
        let formElements = e.target.elements;
        let taskName = formElements[0].value;
        let desc = formElements[1].value;
        let date = formElements[2].value;

        if (!taskName || !desc || !date) {
            return;
        }

        createArticle(taskName, desc, date);
        clearForm(formElements);
    }

    function createArticle(name, desc, date) {
        let newArticle = document.createElement('article');
        newArticle.innerHTML = getArticleTemp(name, desc, date);
        openTask.children[1].appendChild(newArticle);
        let btns = newArticle.querySelectorAll('button');
        addEventListenerToButton(btns);
    }

    function getArticleTemp(name, desc, date) {
        return `<h3>${name}</h3>` +
               `<p>Description: ${desc}</p>` +
               `<p>Due Date: ${date}</p>` +
               getBtnPartial({classes: "green", text: "Start"}, {classes: "red", text: "Delete"});
    }

    function getBtnPartial(btn1, btn2) {
        return `<div class="flex">` +
                    `<button class=${btn1.classes}>${btn1.text}</button>` +
                    `<button class=${btn2.classes}>${btn2.text}</button>` +
                `</div>`
    }

    function addEventListenerToButton(btns) {
        Array.from(btns).forEach(btn => btn.addEventListener('click', clickHandler))
    }

    function clickHandler(e) {
        let currAction = e.target.innerText.toLowerCase();
        btnHandlerEnum[currAction](e);
    }

    function removeBtn(target) {
        target.remove();
    }

    function clearForm(formElements) {
        formElements[0].value = "";
        formElements[1].value = "";
        formElements[2].value = "";
    }
}
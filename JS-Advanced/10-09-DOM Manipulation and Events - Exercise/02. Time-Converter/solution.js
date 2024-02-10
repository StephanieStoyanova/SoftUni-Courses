function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll("input[type='button']"));

    for (let btn of buttons) {
        btn.addEventListener('click', convertHandler);
    }

    function convertHandler(event) {
        let currentUnitInput = event.currentTarget.parentElement.children[1];
        let value = Number(currentUnitInput.value);
        let unit = currentUnitInput.id;

        switch (unit) {
            case "days": calcNewValue(value); break;
            case "hours": calcNewValue(value / 24); break;
            case "minutes": calcNewValue(value / 24 / 60); break;
            case "seconds": calcNewValue(value / 24 / 60 / 60); break;
        }
    }

    function calcNewValue(days) {
        let inputs = document.querySelectorAll("input[type='text']");
        inputs[0].value = days;
        inputs[1].value = days * 24;
        inputs[2].value = days * 24 * 60;
        inputs[3].value = days * 24 * 60 * 60;
    }
}
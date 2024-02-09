function validate() {
    const input = document.getElementById('email');

    let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/gm;

    input.addEventListener('change', () => {
        if (!pattern.test(input.value)) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    })
}
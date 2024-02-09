function focused() {
    const inputs = Array.from(document.querySelectorAll('input'));
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            const parentDiv = input.parentElement;
            if (parentDiv) {
                parentDiv.classList.add('focused');
            }
        });
    
        input.addEventListener('blur', () => {
            const parentDiv = input.parentElement;
            if (parentDiv) {
                parentDiv.classList.remove('focused');
            }
        });
    });
}
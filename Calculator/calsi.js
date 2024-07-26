document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('.item-1');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (value === 'AC') {
                inputBox.value = '';
            } else if (value === 'Del') {
                inputBox.value = inputBox.value.slice(0, -1);
            } else if (value === '=') {
                try {
                    inputBox.value = eval(inputBox.value.replace('%', '/100'));
                } catch (error) {
                    inputBox.value = 'Error';
                }
            } else {
                inputBox.value += value;
            }
        });
    });
});

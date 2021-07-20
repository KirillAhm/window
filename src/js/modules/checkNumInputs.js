const checkNumInputs = (selector) => {
    const nubInputs = document.querySelectorAll(selector);

    nubInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default checkNumInputs;
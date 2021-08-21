const submitFormBtb = document.querySelector('#submitForm');
const form = document.querySelector('form');
const input = document.querySelectorAll('input');
const errorIcon = document.querySelectorAll('.input-wrapper img');
const errorMessage = document.querySelectorAll('.input-wrapper small.error');

submitFormBtb.addEventListener('click', (evt) => {
    evt.preventDefault();
    input.forEach((item, idx) => {
        if (item.value === '' && item.classList.value === '') {
            toggleChange(idx);
            if (errorMessage[idx].textContent === 'asd') {
                errorMessage[idx].textContent = 'Looks like this is not an email';
                return;
            }
            let message = errorMessage[idx].textContent;
            errorMessage[idx].textContent = message + ' cannot be empty';
        } else if (item.value !== '' && item.classList.value === 'change') {



            toggleChange(idx);
        }
        //  else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input[2].value)) && item.classList.value === '') {
        //     toggleChange(idx);
        //     errorMessage[idx].textContent = 'Looks like this is not an email';
        // }
    })
    validateEmail(item);
})

function validateEmail(item) {
    (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input[2].value)) && item.classList.value === 'change' ? toggleChange(2) : false;
}

function toggleChange(idx) {
    console.log(errorMessage);
    errorMessage[idx].classList.toggle('change');
    errorIcon[idx].classList.toggle('change');
    input[idx].classList.toggle('change');
}
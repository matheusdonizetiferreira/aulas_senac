const mode = document.querySelector('#mode_icon');

mode.addEventListener('click',  () => {
    const form = document.querySelector('#login-form');

    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return;
    }

    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');

    form.classList.remove('dark');
});

    const eye = document.querySelector('#eyeview');
    const inputPassword = document.querySelector('#password');

    // eye .addeventListener('click', function(){

    //});

    eye.addEventListener('click', buttonToggle);

    function buttonToggle() {
        if (inputPassword.type == 'password') {
            inputPassword.type = 'text';
            eye.classList.remove('fa-eye');
            eye.classList.add('fa-eye-slash');
        } else {
            inputPassword.type = 'password';
            eye.classList.remove('fa-eye-slash');
            eye.classList.add('fa-eye');

        }
    }
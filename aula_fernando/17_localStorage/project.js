const nameForm =  document.querySelector('#name-form');
const logoutBtn = document.querySelector('#logout');
const welcomeContainer = document.querySelector('#welcome');

nameForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.querySelector('#name');
    localStorage.setItem('name', nameInput.value);

    nameInput.value = '';
    checkUser();

})

function checkUser(){
    const userName = localStorage.getItem('name');
    if(userName){
        nameForm.style.display = 'none';
        welcomeContainer.style.display = 'block';

        //span
        const userNameElement = document.querySelector('#username');
        userNameElement.textContent = userName;
        
    } else{
        nameForm.style.display = 'block';
        welcomeContainer.style.display = 'none';
    }
}    

logoutBtn.addEventListener('click', () =>{
    localStorage.removeItem('name');
    checkUser();
})

checkUser();
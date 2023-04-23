// Pegando o input do HTML
let inputWeight = document.querySelector('#weight');
let inputHeight = document.querySelector('#height');
// Pegando h2 dentro do html e o modal container
let modalContainer = document.querySelector('.modal-container');
let h2 = document.querySelector('.h2Imc')
// Pegando o buttom
let button = document.querySelector('#buttonImc');
// Pegando error popup
let erro = document.querySelector('.error');

// Funcao principal de calcular imc e printar no modal
button.addEventListener('click', function removeClassOpen() {

    if(inputWeight.value != "" && inputWeight.value > 0 && inputHeight.value !== "" && inputHeight.value > 0)
    {
        let resultImc = (inputWeight.value / ((inputHeight.value / 100) ** 2)).toFixed(2);
        modalContainer.classList.remove('open');
        h2.innerHTML = `seu imc é de ${resultImc}`

        // esse ja é gambiarra
        erro.classList.add('open');
        

    }else{
        // aparece o erro
        erro.classList.remove('open');
    }

})

// Ao clicar na image o modal fecha
let imageButton = document.querySelector('.image-button');
imageButton.addEventListener('click', function closeModal() {

    modalContainer.classList.add('open')
})

window.addEventListener('keydown', closeModal)

function closeModal(event){
    if(event.key === 'Escape'){
        modalContainer.classList.add('open');
    }
}



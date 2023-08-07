const buttonConvertion = document.querySelector(".button-convertion");
const inputValue = document.querySelector(".input-value");
const firstValueCurrency = document.querySelector(".first-value");

function pegandoValor() {

    firstValueCurrency.innerHTML = inputValue.value;
}

buttonConvertion.addEventListener("click", pegandoValor);
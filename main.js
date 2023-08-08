const buttonConvertion = document.querySelector(".button-convertion");
const inputValue = document.querySelector(".input-value");
const firstValueCurrency = document.querySelector(".first-value");
const selectionCurrency = document.querySelector(".select-currency");
const secondValueCurrency = document.querySelector(".second-value");
const secondImageCurrency = document.querySelector(".second-image-value");
const secondDescriptionCurrency = document.querySelector(".description-currency");

function conversaoValores() {

    firstValueCurrency.innerHTML = `R$ ${inputValue.value}`;

    const currencyDolar = 5.2;
    const currencyEuro = 6.1;
    const currencyLibra = 6.2;
    const currencyBitcoin = 870.243;

    if(selectionCurrency.value == "dolar") {
        secondValueCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue.value / currencyDolar);
    }

    if(selectionCurrency.value == "euro") {
        secondValueCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue.value / currencyEuro);
    }

    if(selectionCurrency.value == "libra") {
        secondValueCurrency.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue.value / currencyLibra);
    }

    if(selectionCurrency.value == "bitcoin") {
        secondValueCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue.value / currencyBitcoin);
    }
}

function alteracaoImagem() {
    if(selectionCurrency.value == "dolar") {
        secondImageCurrency.src = "./assets/img/estados-unidos.png";
        secondDescriptionCurrency.innerHTML = "Dólar Americano";
    }

    if(selectionCurrency.value == "euro") {
        secondImageCurrency.src = "./assets/img/euro.png";
        secondDescriptionCurrency.innerHTML = "Euro";
    }

    if(selectionCurrency.value == "libra") {
        secondImageCurrency.src = "./assets/img/libra.png";
        secondDescriptionCurrency.innerHTML = "Libra";
    }

    if(selectionCurrency.value == "bitcoin") {
        secondImageCurrency.src = "./assets/img/bitcoin.png";
        secondDescriptionCurrency.innerHTML = "Bitcoin";
    }

    conversaoValores();
}

selectionCurrency.addEventListener("change", alteracaoImagem);

buttonConvertion.addEventListener("click", conversaoValores);
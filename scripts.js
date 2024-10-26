
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueToConverted = document.querySelector(".currency-value")
    
    console.log(currencySelect.value)
    

    

    const dolarToday = 5.69
    const euroToday = 6.16
    const libraToday = 8.70

    const convertedValue = inputCurrencyValue / dolarToday


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


    if (currencySelect.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday);

    }

}


function chanceCurrency (){
const currencyName = document.getElementById ("currency-name")
const currencyImage = document.querySelector (".currency-image")


if (currencySelect.value == "dolar") {
    currencyName.innerHTML =  "Dólar americano" 
    currencyImage.src="./assets/EUA.png"
}

if (currencySelect.value == "euro") {
    currencyName.innerHTML =  "Euro" 
    currencyImage.src="./assets/EURO.png"
}

if (currencySelect.value == "libra"){
    currencyName.innerHTML = "Libra"
    currencyImage.src="./assets/download.png"
}

convertValues()

}

currencySelect.addEventListener ("change", chanceCurrency )
convertButton.addEventListener("click", convertValues)



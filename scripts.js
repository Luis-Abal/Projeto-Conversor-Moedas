const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');

function convertValues() {
   const inputCurrencyValue = document.querySelector('.input-currency').value;
   const currencyValueToConvert = document.querySelector('.currency-value-to-convert'); // Valor em Real
   const currencyValueConverted = document.querySelector('.currency-value'); // Outras moedas

   console.log(currencySelect.value)

   const dolarToday = 5.2;
   const euroToday = 6.2;
   const francoSuicoToday = 6.4;

   if (currencySelect.value == 'dolar') {
      currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
         style: 'currency',
         currency: 'USD'
      }).format(inputCurrencyValue / dolarToday)
   }

   if (currencySelect.value == 'euro') {
      currencyValueConverted.innerHTML = new Intl.NumberFormat('es-ES', {
         style: 'currency',
         currency: 'EUR'
      }).format(inputCurrencyValue / euroToday)
   }

   if (currencySelect.value == 'francoSuico') {
      currencyValueConverted.innerHTML = new Intl.NumberFormat('fr-CH', {
         style: 'currency',
         currency: 'CHF'
      }).format(inputCurrencyValue / francoSuicoToday)
   }


   currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
   }).format(inputCurrencyValue)

}

function changeCurrency() {
   const currencyName = document.getElementById('currency-name');
   const currencyImage = document.querySelector('.currency-img');

   if (currencySelect.value == 'dolar') {
      currencyName.innerHTML = 'Dólar Americano';
      currencyImage.src = './assets/usa.png';
   }

   if (currencySelect.value == 'euro') {
      currencyName.innerHTML = 'Euro';
      currencyImage.src = './assets/euro.png';
   }

   if (currencySelect.value == 'francoSuico') {
      currencyName.innerHTML = 'Franco-Suíço';
      currencyImage.src = './assets/franco-suico.png';
   }

   convertValues()

}



currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)

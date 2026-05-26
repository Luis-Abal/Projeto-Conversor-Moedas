const convertButton = document.querySelector('.convert-button');
const currencyFrom = document.querySelector('.currency-from');
const currencyTo = document.querySelector('.currency-to');

function convertValues() {
   let inputCurrencyValue = document.querySelector('.input-currency').value;
   const currencyValueToConvert = document.querySelector('.currency-value-to-convert'); 
   const currencyValueConverted = document.querySelector('.currency-value'); 

   inputCurrencyValue = Number(inputCurrencyValue.replace(",", "."));

   const rates = {
      real: { real: 1, dolar: 1/5.2, euro: 1/6.2, francoSuico: 1/6.4 },
      dolar: { real: 5.2, dolar: 1, euro: 0.84, francoSuico: 0.81 },
      euro: { real: 6.2, dolar: 1.19, euro: 1, francoSuico: 0.96 },
      francoSuico: { real: 6.4, dolar: 1.23, euro: 1.04, francoSuico: 1 }
   };

   const from = currencyFrom.value;
   const to = currencyTo.value;

   const result = inputCurrencyValue * rates[from][to];

   // Mostrar valor original
   let formatFrom = { style: 'currency', currency: 'BRL' };
   if (from === 'dolar') formatFrom.currency = 'USD';
   if (from === 'euro') formatFrom.currency = 'EUR';
   if (from === 'francoSuico') formatFrom.currency = 'CHF';

   currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', formatFrom).format(inputCurrencyValue);

   // Mostrar valor convertido
   let formatTo = { style: 'currency', currency: 'BRL' };
   if (to === 'dolar') formatTo.currency = 'USD';
   if (to === 'euro') formatTo.currency = 'EUR';
   if (to === 'francoSuico') formatTo.currency = 'CHF';

   currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', formatTo).format(result);
}

function updateCurrencyDisplay() {
   const currencyName = document.getElementById('currency-name'); // destino
   const currencyImage = document.querySelector('.currency-img'); // bandera destino
   const currencyFromImage = document.querySelector('.currency-box img'); // bandera origen
   const currencyFromName = document.getElementById('currency-from-name'); // texto origen

   // Moneda de origen
   if (currencyFrom.value === 'real') {
      currencyFromImage.src = './assets/real.png';
      currencyFromName.innerHTML = 'Real Brasileiro';
   }
   if (currencyFrom.value === 'dolar') {
      currencyFromImage.src = './assets/usa.png';
      currencyFromName.innerHTML = 'Dólar Americano';
   }
   if (currencyFrom.value === 'euro') {
      currencyFromImage.src = './assets/euro.png';
      currencyFromName.innerHTML = 'Euro';
   }
   if (currencyFrom.value === 'francoSuico') {
      currencyFromImage.src = './assets/franco-suico.png';
      currencyFromName.innerHTML = 'Franco-Suíço';
   }

   // Moneda de destino
   if (currencyTo.value === 'real') {
      currencyName.innerHTML = 'Real Brasileiro';
      currencyImage.src = './assets/real.png';
   }
   if (currencyTo.value === 'dolar') {
      currencyName.innerHTML = 'Dólar Americano';
      currencyImage.src = './assets/usa.png';
   }
   if (currencyTo.value === 'euro') {
      currencyName.innerHTML = 'Euro';
      currencyImage.src = './assets/euro.png';
   }
   if (currencyTo.value === 'francoSuico') {
      currencyName.innerHTML = 'Franco-Suíço';
      currencyImage.src = './assets/franco-suico.png';
   }
}


// Eventos
currencyFrom.addEventListener('change', updateCurrencyDisplay);
currencyTo.addEventListener('change', updateCurrencyDisplay);
convertButton.addEventListener('click', () => {
   convertValues();
   updateCurrencyDisplay();
});


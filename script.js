
function selectPlan(planId) {
    // Implement logic to handle plan selection, e.g., highlight the selected plan
    const selectedPlan = document.getElementById(planId);
    // Clear previous selections
    document.querySelectorAll('.pricing-card').forEach(card => card.classList.remove('selected'));
    selectedPlan.classList.add('selected');
    alert("You have selected the "+planId)
}

function changeCurrency() {
    // Implement logic to change the currency based on user selection
    const currencySelect = document.getElementById('currency-select');
    const selectedCurrency = currencySelect.value;
    const prices = document.querySelectorAll('.price');
    prices.forEach(price => {
        const currentPriceText = price.textContent.split('/')[0].slice(1).replace(',', '.');
        const currentPrice = parseFloat(currentPriceText);

        if (!isNaN(currentPrice)) {
            const convertedPrice = convertCurrency(currentPrice, selectedCurrency);
            price.textContent = `${selectedCurrency}${convertedPrice.toFixed(2)}/month`;
            price.setAttribute('data-currency', selectedCurrency);
        } else {
            console.error(`Failed to parse price: ${currentPriceText}`);
        }
    });
}

function convertCurrency(price, targetCurrency) {
    const conversionRates = {
        USD: 1,
        EUR: 0.85,
        RS: 75,
        GBP: 0.73,
        AUD: 1.35,
        CAD: 1.25,
        JPY: 110,
        CNY: 6.45
      };

    return price * conversionRates[targetCurrency];
}
function refreshPage(){
  location.reload ();
}

document.getElementById('basic-plan').addEventListener('click', function () {
    selectPlan('basic-plan');
});

document.getElementById('pro-plan').addEventListener('click', function () {
    selectPlan('pro-plan');
});

document.getElementById('premium-plan').addEventListener('click', function () {
    selectPlan('premium-plan');
});

document.getElementById('currency-select').addEventListener('change', changeCurrency);

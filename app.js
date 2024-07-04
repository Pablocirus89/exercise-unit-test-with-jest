let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
} 

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar / oneEuroIs.USD * oneEuroIs.JPY;
    return Number(valueInYen.toFixed(2));
}

//Yen to GBP
const fromYenToPound = function(valueInYen) {
    
    let valueInPound = valueInYen / oneEuroIs.GBP / oneEuroIs.JPY ;
    
    return Number(valueInPound.toFixed(3));
} 


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }
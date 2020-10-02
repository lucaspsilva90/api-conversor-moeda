const fetch = require('node-fetch');

//this function will get the data from api
const getData = async url => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json
    } catch (error) {
        console.log(error);
    }
};

//this function will get the exchange of a specified currency
const getExchangeRate = async (currency, url) => {
    const data = await getData(url);
    const value = data.rates[currency]
    return Number(value)

}

//this function will calculate the final value
const calculateTransaction = async (originCurrency, targetCurrency, value) => {

    let url = `https://api.exchangeratesapi.io/latest?base=${originCurrency}`;
    const exchangeRate = await getExchangeRate(targetCurrency, url)
    const result = value * exchangeRate;
    return {
        exchangeRate,
        result
    }

}

module.exports = calculateTransaction;


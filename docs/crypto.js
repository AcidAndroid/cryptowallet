//Criptomonedas disponibles
/*
1 Bitcoin BTC
2 Ethereum ETH
3 Litecoin LTD
4 Paragon PRG
*/
const cryptoCoins = ["Bitcoin", "Ethereum", "Litecoin", "Paragon"]
const cryptoSymbols = ["BTC", "ETH", "LTD", "PRG"]
const cryptoPage = ["https://bitcoin.org", "https://www.ethereum.org", "https://litecoin.org", "https://paragoncoin.com"]
const cryptoRate = ["7746.19", "520.20", "149.38", "0.22"]

//Wallet
function Wallet(accounts /*, balance*/ ) {
    this.accounts = accounts
        //this.balance = balance
    this.symbol = "USD"
        //Obtiene el balance total del wallet
    this.TotalBalance = function() {
        return accounts.reduce(function(acum, numero) {
            //console.log(numero)
            acum += numero.balance * numero.rateInUSD
                //console.log(acum)
            return acum
        }, 0).toFixed(2)
    }
}

//Cuentas de cryptomonedas 
function CriptoAccount(name, symbol, balance, rateInUSD, URL) {
    this.name = name
    this.symbol = symbol
    this.balance = balance
    this.rateInUSD = rateInUSD
    this.URL = URL
}
CriptoAccount.prototype.getName = function() {
    return this.name
}
CriptoAccount.prototype.getSymbol = function() {
    return this.symbol
}
CriptoAccount.prototype.getBalance = function() {
    return this.balance
}
CriptoAccount.prototype.getURL = function() {
    return this.URL
}
CriptoAccount.prototype.transfer = function(account1, account2, amount) {

    var amountDestiny = 0
        //valida que no puedas hacer una trasferencia mayor al monto de la cuenta1
    if (account1.balance < amount) {
        alert('No se puede transferir ese monto.')
        return
    }

    if (account1.symbol === account2.symbol) {
        alert('No se puede hacer transferencia a la misma cuenta.')
        return
    }
    //realiza la conversion a USD antes de cambirla a la moneda destino
    console.log((account1.balance * account1.rateInUSD) / account2.rateInUSD)
    amountDestiny = (account1.balance * account1.rateInUSD) / account2.rateInUSD

    //le restamos el monto
    account1.balance -= amount
    account2.balance += amountDestiny
}

//Por cada coin genero un objeto y lo agrego al wallet
const fillWallet = function() {
    var p = [];
    var len = cryptoCoins.length
    for (let index = 0; index < len; index++) {
        //Genero el objeto; le pongi un valor random para el balance de las cuentas
        var account = new CriptoAccount(cryptoCoins[index], cryptoSymbols[index], Number((Math.random() * 100).toFixed(2)), cryptoRate[index], cryptoPage[index])
        p.push(account);
    }
    return p
}
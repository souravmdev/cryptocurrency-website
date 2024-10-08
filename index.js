var settings = {
  async: true,
  scrossDomain: true,
  url: "https://pro-api.coingecko.com/api/v3/simple/token_price/bitcoin%2Cethereum%2Cdogecoin?contract_addresses=0x2260fac5e5542a773aa44fbcfedf7c193bc2c599&vs_currencies=usd",
  methods: "GET",
  headers: {},
};
$.ajax(settings).done(function (response) {
  console.log(response);
});

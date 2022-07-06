import Web3 from "web3";

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  //we are in the browser and metamask is working
  window.ethereum.request({ method: 'eth_requestAccounts'});

  web3 = new Web3(window.ethereum);
}
else {
//we are on the server OR the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/15708e221f8c4f76908a5c7f1a9291ce'
  );
  web3 = new Web3(provider);
}

export default web3;

import {makeAutoObservable} from 'mobx';
import Web3 from 'web3';

export default class BlockchainData{
  loading = true;
  userAddress = '';
  constructor(){
    makeAutoObservable(this);
    this.loadWeb3();
    this.loadBlockchainData();
  }
  getUserAddress(){
    return this.userAddress;
  }
  async loadWeb3(){
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }else{
      console.log('Non-ethereum browser detected. Condider trying MetaMask.')
    }
  }
  async loadBlockchainData(){
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.userAddress = accounts[0];
  }
}
import {makeAutoObservable, runInAction} from 'mobx';
import BlockchainService from '../../../Services/BlockchainService';

export default class SearchBarStore{
  service = new BlockchainService();
  constructor(){
    makeAutoObservable(this);
  }
  onClick = (id) =>{
    /*
    const transactionObject = {
      to: author,
      from: this.service.userAddress,
      value: 1000000000000000000
    }
    window.web3.eth.sendTransaction(transactionObject);
    */
    this.service.tipPaffOwner(id);
  }
}
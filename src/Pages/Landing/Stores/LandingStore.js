import {makeAutoObservable} from 'mobx';
import BlockchainService from '../../../Services/BlockchainService';

export default class ProfileStore{
  address = '';
  paffs = [];
  service = new BlockchainService();
  
  constructor(address){
    this.userAddress = address;
    makeAutoObservable(this);
    if(window.web3 || window.ethereum){
    }
  }

}
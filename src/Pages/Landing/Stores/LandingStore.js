import {makeAutoObservable} from 'mobx';
import BlockchainService from '../../../Services/BlockchainService';

export default class LandingStore{
  paffs = [];
  service = new BlockchainService();
  
  constructor(address){
    this.userAddress = address;
    makeAutoObservable(this);
    if(window.web3 || window.ethereum){
      this.fetchPaffs();
    }
  }
  getPaffs(){
    return this.paffs;
  }
  fetchPaffs(){
    this.service.fetchAllPaffs()
    .then((res)=>{
      this.paffs = res;
    });
  }
}
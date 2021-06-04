import {makeAutoObservable} from 'mobx';

export default class BlockchainData{
  loading = true;
  userAddress = '';
  constructor(){
    makeAutoObservable(this);
  }
  getUserAddress(){
    return this.userAddress;
  }
}
import {makeAutoObservable} from 'mobx';
import BlockchainService from '../../../Services/BlockchainService';

export default class TipPaffStore{
  userAddress;
  service = new BlockchainService();
  constructor(){
    makeAutoObservable(this);
    this.userAddress = this.service.userAddress;
  }
  toggleStatus = () =>{
    this.status += 1;
  }
  onClick = (id) =>{
    this.service.tipPaffOwner(id);
  }
}
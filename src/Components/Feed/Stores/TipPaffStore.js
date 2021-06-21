import {makeAutoObservable} from 'mobx';
import BlockchainService from '../../../Services/BlockchainService';

export default class TipPaffStore{
  userAddress;
  service = new BlockchainService();
  constructor(){
    makeAutoObservable(this);
    this.userAddress = this.service.userAddress;
  }
  onClick = (id) =>{
    this.service.tipPaffOwner(id);
  }
}
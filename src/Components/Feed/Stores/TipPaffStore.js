import {makeAutoObservable} from 'mobx';
import BlockchainService from '../../../Services/BlockchainService';

export default class TipPaffStore{
  service = new BlockchainService();
  constructor(){
    makeAutoObservable(this);
  }
  onClick = (id) =>{
    this.service.tipPaffOwner(id);
  }
}
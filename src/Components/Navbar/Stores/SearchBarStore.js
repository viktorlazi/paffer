import {makeAutoObservable} from 'mobx';
import BlockchainService from '../../../Services/BlockchainService';

export default class SearchBarStore{
  content = '';
  service = new BlockchainService();  
  constructor(){
    makeAutoObservable(this);
  }
  getContent(){
    return this.content;
  }
  setContent(_content){
    this.content = _content;
  }
  fetchResults(){
    return this.service.findAddress(this.content);
  }
}
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
  submit(){
    window.location.href = ("http://localhost:3000/profile/" + this.content);
  }

}
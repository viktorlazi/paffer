import {makeAutoObservable} from 'mobx';
import BlockchainExplorer from '../../../Services/BlockchainExplorer';

export default class SearchBarStore{
  content = '';
  service = new BlockchainExplorer();  
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
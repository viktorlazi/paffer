import {makeAutoObservable} from 'mobx';
import PublishPaffStore from '../Components/Stores/PublishPaffStore';

export default class PaffStore{
  userAddress = '';
  paffs = [];
  publishPaffStore = new PublishPaffStore((x)=>this.pushPaff(x));
  
  constructor(address){
    this.userAddress = address;
    makeAutoObservable(this);
  }
  getPaffs(){
    return this.paffs;
  }
  pushPaff(content){
    const date = Date.now();
    this.paffs.push({
      content: content,
      date: date,
      address: this.userAddress,
      tipAmount: 0
    });
  }
}
import {makeAutoObservable} from 'mobx';

export default class PaffStore{
  userAddress = '';
  paffs = [];
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
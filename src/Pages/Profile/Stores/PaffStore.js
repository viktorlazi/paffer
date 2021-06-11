import {makeAutoObservable} from 'mobx';
import PublishPaffStore from '../Components/Stores/PublishPaffStore';
import BlockchainService from '../../../Services/BlockchainService';

export default class PaffStore{
  userAddress = '';
  paffs = [];
  publishPaffStore = new PublishPaffStore((x)=>this.pushPaff(x));
  service = new BlockchainService();
  
  constructor(address){
    this.userAddress = address;
    makeAutoObservable(this);
    this.fetchPaffs();
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
  pushPaff(content){
    const date = Date.now()/1000;
    this.service.uploadPaff(content, this.userAddress)
    .then(()=>{
      this.paffs.unshift({
        content: content,
        date: date,
        address: this.userAddress,
        tipAmount: 0
      });
    })
    .catch(()=>{
      this.publishPaffStore.errorMessage = 'rejected';
    })
  }

}
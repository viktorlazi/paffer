import {makeAutoObservable, toJS} from 'mobx';
import PublishPaffStore from '../Components/Stores/PublishPaffStore';
import BlockchainService from '../../../Services/BlockchainService';

export default class ProfileStore{
  profileAddress;
  paffs = [];
  publishPaffStore = new PublishPaffStore((x)=>this.pushPaff(x));
  service = new BlockchainService();
  
  constructor(address){
    this.profileAddress = address;
    makeAutoObservable(this);
    if(window.web3 || window.ethereum){
      this.fetchPaffs();
    }
  }
  getPaffs(){
    return this.paffs;
  }
  fetchPaffs(){
    this.service.fetchAllPaffs()
    .then((res)=>{
      this.paffs = res.filter(e=>{return e.author===this.profileAddress});

    });
  }
  pushPaff(content){
    const date = Date.now()/1000;
    this.service.uploadPaff(content, this.profileAddress)
    .then(()=>{
      this.paffs.unshift({
        content: content,
        date: date,
        address: this.profileAddress,
        tipAmount: 0
      });
    })
    .catch(()=>{
      this.publishPaffStore.errorMessage = 'rejected';
    })
  }

}
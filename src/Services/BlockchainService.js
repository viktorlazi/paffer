import {makeAutoObservable} from 'mobx';
import Web3 from 'web3';
import Paffer from '../abis/Paffer.json';

export default class BlockchainService{
  networkData;
  paffs;
  constructor(){
    makeAutoObservable(this);
    this.loadWeb3();
    this.getNetworkData();
  }
  async loadWeb3(){
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider);
    }else{
      console.log('Non-ethereum browser detected. Condider trying MetaMask.')
    }
  }
  async getNetworkData(){
    const networkId = await window.web3.eth.net.getId();
    this.networkData = Paffer.networks[networkId];
  }
  methods(){
    if(this.networkData){
      const paffer = new window.web3.eth.Contract(Paffer.abi, this.networkData.address)
      return paffer.methods;
    }
  }
  uploadPaff(content, sender){
    return new Promise((res, rej)=>{
      this.methods().uploadPaff(content).send({from:sender})
      .then(()=>{
        res(true);
      })
      .catch(()=>{
        rej(false);
      });
    });
  }
  async fetchPaffById(id){
    console.log(await this.methods().paffs(id).call());
  }
  async fetchAllPaffs(){
    if(!this.methods()){
      return [];
    }
    const paffCount = await this.methods().paffCount().call();
    let paffs = [];
    if(!paffCount){
      return [];
    }
    for (let i = 0; i < paffCount; i++) {
      paffs.push(await this.methods().paffs(paffCount).call());
    }
    this.paffs = paffs;
    return paffs;
  }
  async fetchAuthorPaffs(author){    
    this.paffs = await this.fetchAllPaffs();
    if(!this.paffs){
      return [];
    }
    return this.paffs.filter(e=>e.author===author);
  }
}
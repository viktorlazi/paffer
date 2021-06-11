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
  getMethods(){
    return new Promise((res, rej)=>{
      if(this.networkData){
        const paffer = new window.web3.eth.Contract(Paffer.abi, this.networkData.address)
        res(paffer.methods);
      }
      setInterval(()=>{
        const paffer = new window.web3.eth.Contract(Paffer.abi, this.networkData.address)
        res(paffer.methods);
      }, 1000);
    });
  }
  uploadPaff(content, sender){
    return new Promise((res, rej)=>{
      this.getMethods().uploadPaff(content).send({from:sender})
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
  fetchAllPaffs(){
    return new Promise((res, rej)=>{
      let paffs = [];
      this.getMethods()
      .then(async resp=>{
        const methods = resp;
        const paffCount = await methods.paffCount().call();
        if(!paffCount){
          rej([])
        }
        for (let i = 0; i < paffCount; i++) {
          paffs.push(await methods.paffs(paffCount).call());
        }
        this.paffs = paffs;
        res(paffs);
      })
    });
  }
  async fetchAuthorPaffs(author){    
    this.paffs = await this.fetchAllPaffs();
    if(!this.paffs){
      return [];
    }
    return this.paffs.filter(e=>e.author===author);
  }
}
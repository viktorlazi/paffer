import {makeAutoObservable, runInAction} from 'mobx';
import Web3 from 'web3';
import Paffer from '../abis/Paffer.json';

export default class BlockchainService{
  networkData = null;
  userAddress = '';
  paffs = [];
  constructor(){
    makeAutoObservable(this);
    if(window.web3 || window.ethereum){
      this.loadWeb3();
      this.getNetworkData();
      this.loadBlockchainData();
    }
  }
  async loadWeb3(){
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
    }else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider);
    }else{
      console.log('Non-ethereum browser detected. Condider trying MetaMask.')
    }
  }
  getNetworkData(){
    return new Promise((res,rej)=>{
      window.web3.eth.net.getId()
      .then((id)=>{
        res(Paffer.networks[id])
      })
    });
  }
  async loadBlockchainData(){
    const accounts = await window.web3.eth.getAccounts();
    runInAction(()=>{
      this.userAddress = accounts[0];
    });
  }
  getMethods(){
    return new Promise(async(res, rej)=>{
      if(this.networkData){
        const paffer = await new window.web3.eth.Contract(Paffer.abi, this.networkData.address)
        res(paffer.methods);
      }
      this.getNetworkData()
      .then((networkData)=>{
        if(networkData){
          const paffer = new window.web3.eth.Contract(Paffer.abi, networkData.address)
          res(paffer.methods);
        }
      });
    });
  }
  uploadPaff(content, sender){
    return new Promise((res, rej)=>{
      this.getMethods()
      .then(methods=>{
        methods.uploadPaff(content).send({from:sender})
        .then(()=>{
          res(true);
        })
        .catch(()=>{
          rej(false);
        });
      });
    });
  }
  fetchAllPaffs(){
    return new Promise((res, rej)=>{
      let paffs = [];
      this.getMethods()
      .then(async resp=>{
        const methods = resp;
        const paffCount = await methods.paffCount().call();
        if(!paffCount){
          rej([]);
        }
        for (let i = 1; i <= paffCount; i++){
          const newPaff = await methods.paffs(i).call();
          paffs.push(newPaff);
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
  tipPaffOwner = async (id) =>{
    const methods = await this.getMethods();    
    methods.tipPaffOwner(id).send({from:this.userAddress, value: window.web3.utils.toWei('1', 'Ether')});
  }
}
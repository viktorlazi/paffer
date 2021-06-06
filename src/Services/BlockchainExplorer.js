import {makeAutoObservable} from 'mobx';
import Web3 from 'web3';
import Paffer from '../abis/Paffer.json';

export default class BlockchainExplorer{
  networkData;
  posts = [
    {
      id: 0,
      author: 'viktor',
      content: 'prvi',
      tipAmount: '1000',
      date: new Date(1)
    },
    {
      id: 1,
      author: 'viktor',
      content: 'drugi',
      tipAmount: '30',
      date: new Date(1)
    },
    {
      id: 2,
      author: 'jozo',
      content: 'alo ja san jozo',
      tipAmount: '220',
      date: new Date(1)
    },
    {
      id:3,
      author: 'jozo',
      content: 'sta ima',
      tipAmount: '12',
      date: new Date(1)
    }
  ];
  constructor(){
    makeAutoObservable(this);
    this.loadWeb3();
    this.getNetworkData();
  }
  getPostById(id){
    return this.posts.find(e=>e.id===id);
  }
  getAuthorPosts(author){
    return this.posts.filter(e=>e.author===author);
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
    this.methods().uploadPaff(content).send({from:sender});
  }
  async fetchPaffs(){
    console.log(await this.methods().paffs(1).call());
  }
}
import {makeAutoObservable} from 'mobx';
import Web3 from 'web3';

export default class BlockchainData{
  loading = true;
  userAddress = '';
  constructor(){
    makeAutoObservable(this);
    this.loadWeb3();
    this.loadBlockchainData();
  }
  getUserAddress(){
    return this.userAddress;
  }
  async loadWeb3(){
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }else{
      console.log('Non-ethereum browser detected. Condider trying MetaMask.')
    }
  }
  async loadBlockchainData(){
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.userAddress = accounts[0];
    console.log(this.userAddress);
    /*
    const networkId = await web3.eth.net.getId()
    const networkData = Decentragram.networks[networkId]
    if(networkData){
      const decentragram = web3.eth.Contract(Decentragram.abi, networkData.address)
      this.setState({ decentragram })
      const imagesCount = await decentragram.methods.imageCount().call()
      this.setState({ imagesCount })

      for(let i = 1; i <= imagesCount; i++){
        const image = await decentragram.methods.images(i).call()
        this.setState({
          images: [...this.state.images, image]
        })
      }

      this.setState({
        images:this.state.images.sort((a,b) => b.tipAmount - a.tipAmount)
      })

      this.setState({ loading: false })
    }else{
      window.alert('decentragram not deployed to network')
    }
    */
  }
}
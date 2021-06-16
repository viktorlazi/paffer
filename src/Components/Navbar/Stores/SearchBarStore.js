import {makeAutoObservable, runInAction} from 'mobx';
import BlockchainService from '../../../Services/BlockchainService';

export default class SearchBarStore{
  content = '';
  service = new BlockchainService();
  constructor(){
    makeAutoObservable(this);
  }
  getContent(){
    return this.content;
  }
  async setContent(input){
    this.content = input.value;
    const typedLength = this.content.length;
    if(typedLength > 2){
      setTimeout(async()=>{
        if(typedLength === this.content.length){
          const profiles = await this.getProfileAddressesAsync();
          if(profiles.length){
            runInAction(()=>{
              this.content = profiles[0].author;
            });
            input.focus();
            input.setSelectionRange(typedLength, this.content.length);
          }
        }
      }, 400);
    }
  }
  async getProfileAddressesAsync(){
    const allPaffs = await this.service.fetchAllPaffs();
    const filteredAuthors = allPaffs.filter(e=>{return e.author.includes(this.content)});
    return filteredAuthors;
  }
  submit(){
    window.location.href = ("http://localhost:3000/profile/" + this.content);
  }

}
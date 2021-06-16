import {makeAutoObservable, runInAction} from 'mobx';
import BlockchainService from '../../../Services/BlockchainService';

export default class SearchBarStore{
  content = '';
  service = new BlockchainService();
  profiles = [];
  constructor(){
    makeAutoObservable(this);
  }
  getContent(){
    return this.content;
  }
  setContent(input){
    let ascending = true;
    if((input.value.length < this.content.length)){
      ascending = false;
    }
    this.content = input.value;
    this.checkSuggestions(input, ascending);
  }
  async checkSuggestions(input, ascending){
    const typedLength = this.content.length;
    if(typedLength > 1){
      setTimeout(async()=>{
        if(typedLength === this.content.length){
          const profiles = await this.getProfileAddressesAsync();
          if(profiles.length){
            runInAction(()=>{
              if(typedLength > 2 && ascending){
                this.content = profiles[0].author;
              }
              this.profiles = [];
              profiles.forEach(e => {
                if(!this.profiles.includes(e.author)){
                  this.profiles.push(e.author);
                }
              });
            });
            input.focus();
            input.setSelectionRange(typedLength, this.content.length);
          }else{
            runInAction(()=>{
              this.profiles = [];
            });
          }
        }
      }, 100);
    }else{
      this.profiles = [];
    }
  }
  getProfiles(){
    return this.profiles;
  }
  onClick(input){
    this.content = '0x';
    this.checkSuggestions(input, true);
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
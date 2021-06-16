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
  async setContent(input){
    this.content = input.value;
    const typedLength = this.content.length;
    if(typedLength > 1){
      setTimeout(async()=>{
        if(typedLength === this.content.length){
          const profiles = await this.getProfileAddressesAsync();
          if(profiles.length){
            runInAction(()=>{
              this.content = profiles[0].author;
              profiles.forEach(e => {
                if(!this.profiles.includes(e.author)){
                  this.profiles.push(e.author);
                }
              });
            });
            input.focus();
            input.setSelectionRange(typedLength, this.content.length);
          }
        }
      }, 400);
    }
  }
  getProfiles(){
    return this.profiles;
  }
  onClick(){
    this.content = '0x';
  }
  async getProfileAddressesAsync(){
    const allPaffs = await this.service.fetchAllPaffs();
    console.log(allPaffs);
    const filteredAuthors = allPaffs.filter(e=>{return e.author.includes(this.content)});
    return filteredAuthors;
  }
  submit(){
    window.location.href = ("http://localhost:3000/profile/" + this.content);
  }

}
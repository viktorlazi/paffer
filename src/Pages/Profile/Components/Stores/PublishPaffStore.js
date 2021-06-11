import {makeAutoObservable} from 'mobx';

export default class PublishPaffStore{
  content = '';
  publish;
  errorMessage = '';
  constructor(pushToList){
    this.publish = () =>{
      if(this.checkForErrors()){
        pushToList(this.content);
      }
    }
    makeAutoObservable(this);
  }
  getContent(){
    return this.content;
  }
  setContent(x){
    this.content = x;
  }
  checkForErrors(){
    if(this.content.length <= 0 || !this.content.trim().length){
      this.errorMessage = 'You can\'t publish an emtpy paff!';
      return false;
    }
    if(this.content.length > 25){
      this.errorMessage = 'Paff length should be <25 characters!';
      return false;
    }
    return true;
  }
}
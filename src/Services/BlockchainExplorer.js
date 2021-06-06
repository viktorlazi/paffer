import {makeAutoObservable} from 'mobx';

export default class BlockchainExplorer{
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
  }
  getPostById(id){
    return this.posts.find(e=>e.id===id);
  }
  getAuthorPosts(author){
    return this.posts.filter(e=>e.author===author);
  }

}
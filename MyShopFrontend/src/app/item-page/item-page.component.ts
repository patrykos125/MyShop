import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';
import { Item } from '../classes/Item';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { BasketService } from '../service/basket.service';
import { CommentItem } from '../classes/Comment';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('650ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ItemPageComponent implements OnInit {
  public ThisItem: Item = {
    itemId: 0,
    shortDescription: '',
    longDescription: '',
    price: 0,
    imgUrl: '',
    size: '',
    category: 0,
    oldPrice: 0,
    sale: false,
    comments: []
  };

  yourComment: CommentItem ={
    rating: 1,
    userID: 0,
    userName: '',
    creationDate: new Date(),
    commentText: ""
  }

  commentText: string = "";
  hoverValue: number = 1;
  userID: number = 0;
  sortOption:string = "DESC";

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router, private basketService: BasketService, private userService: UserService, private http: HttpClient) {

  }
  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.itemService.getItem(this.route.snapshot.params['id']).subscribe((item:Item)=> {
      if(item){
        this.ThisItem = item;
      } else []

  })
  this.userService.getUserID().subscribe((response) =>{
    if(response) this.userID = response;
  })

}

public checkItem(itemID: number):boolean{
  return this.basketService.CheckCart(itemID);
}

public addItem(itemID: number){
  this.basketService.addItemToBasket(itemID);
}

public removeItem(itemID:number){
this.basketService.removeItemFromBasket(itemID);
}

public SendComment(){
    this.addComment(new CommentItem(this.commentText, this.yourComment.rating, 0, '', new Date()), this.ThisItem.itemId);
}

public countStars(): number{
  return this.ThisItem.comments.reduce((acc, comment) => acc + comment.rating, 0)/this.ThisItem.comments.length;
}

public commentsCount():number{
  return this.ThisItem.comments.length;
}

public setRating(star: number) {
  this.yourComment.rating = star;
}

sortCommentsByDate() {
  if(this.sortOption === "ASC"){
    this.ThisItem.comments.sort((a, b) => new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime());
    this.sortOption = "DESC";
  } else {
    this.ThisItem.comments.sort((a, b) => new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime());
    this.sortOption = "ASC";
  }
}

public isLoggedOrCommentFromUserExist(): boolean{
  if(this.userService.isLogged){
    if(!this.ThisItem.comments.find(x=> x.userID == this.userID)) return true;
  }
  return false;
}

public addComment(comment: CommentItem, itemID: number){
  this.itemService.addComment(comment,itemID).subscribe((response)=>{
    if(response) location.reload();
  })
}

}

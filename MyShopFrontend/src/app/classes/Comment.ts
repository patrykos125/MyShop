export class CommentItem {
  userName: string;
  userID: number;
  commentText:string;
  rating:number;
  creationDate: Date;
  constructor(commentText:string, rating:number, userID: number, userName: string, creationDate: Date){
    this.commentText = commentText;
    this.rating = rating;
    this.userID = userID;
    this.userName = userName;
    this.creationDate = creationDate;
  }
}

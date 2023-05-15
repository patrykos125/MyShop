import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor() { }
  public addItemToFavorite(id: number){
    let storedIds = sessionStorage.getItem('favoriteIds');
    let favoriteIds = storedIds ? JSON.parse(storedIds) : [];
    if(!favoriteIds.includes(id)){
      favoriteIds.push(id);
    }
    sessionStorage.setItem('favoriteIds', JSON.stringify(favoriteIds));

  }
  public checkFavorite(id:number){
    let storedIds = sessionStorage.getItem('favoriteIds');
    let favoriteIds = storedIds ? JSON.parse(storedIds) : [];
     return favoriteIds.includes(id)

  }
  public deleteFromFavorite(id:number){
    console.log("tu jeste")
    let storedIds = sessionStorage.getItem('favoriteIds');
    let favoriteIds = storedIds ? JSON.parse(storedIds) : [];

    if(favoriteIds.includes(id)){
      favoriteIds= favoriteIds.filter((el: number)=> el !==id)
    }

    sessionStorage.setItem('favoriteIds', JSON.stringify(favoriteIds));

    }

}

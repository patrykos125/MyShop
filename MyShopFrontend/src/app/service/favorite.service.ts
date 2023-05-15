import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favoritesCountEmitter = new EventEmitter<number>();


  public addItemToFavorite(id: number){
    let storedIds = sessionStorage.getItem('favoriteIds');
    let favoriteIds = storedIds ? JSON.parse(storedIds) : [];
    if(!favoriteIds.includes(id)){
      favoriteIds.push(id);
    }
    this.favoritesCountEmitter.emit(parseInt(favoriteIds.length));
    sessionStorage.setItem('favoriteIds', JSON.stringify(favoriteIds));

  }
  public checkFavorite(id:number){
    let storedIds = sessionStorage.getItem('favoriteIds');
    let favoriteIds = storedIds ? JSON.parse(storedIds) : [];
     return favoriteIds.includes(id)

  }
  public deleteFromFavorite(id:number){
    let storedIds = sessionStorage.getItem('favoriteIds');
    let favoriteIds = storedIds ? JSON.parse(storedIds) : [];

    if(favoriteIds.includes(id)){
      favoriteIds= favoriteIds.filter((el: number)=> el !==id)
    }
    this.favoritesCountEmitter.emit(parseInt(favoriteIds.length));
    sessionStorage.setItem('favoriteIds', JSON.stringify(favoriteIds));

    }
    public getLength():number{

      let storedIds = sessionStorage.getItem('favoriteIds');
      let favoriteIds = storedIds ? JSON.parse(storedIds) : [];
      this.favoritesCountEmitter.emit(parseInt(favoriteIds.length));
    return favoriteIds.length;

    }


}

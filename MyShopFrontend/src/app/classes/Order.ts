import { Item } from "./Item";
import { ItemInBasket } from "./ItemInBasket";

export interface Order{
    id: number;
    date: Date;
    items: ItemInBasket[];
    status: string;
}
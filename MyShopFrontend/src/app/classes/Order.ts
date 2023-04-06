import { Item } from "./Item";

export interface Order{
    id: number;
    date: Date;
    items: Item[];
    status: string;
}
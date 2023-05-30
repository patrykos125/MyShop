import { ItemInBasket } from "./ItemInBasket";
import { UserDto } from "./UserDto";

export interface Order{
    id: number;
    date: Date;
    items: ItemInBasket[];
    status: string;
    user?: UserDto;
    avatar?: string,
}
import { Document } from 'mongoose';
import { Item } from 'src/item/interfaces/item.interface';
import { User } from 'src/user/interfaces/user.interface';

export interface Order extends Document{
    readonly owner: User;
    readonly totalPrice: number;
    readonly items: [{item:Item,quantity:string}];
    readonly createdAt: Date;
}
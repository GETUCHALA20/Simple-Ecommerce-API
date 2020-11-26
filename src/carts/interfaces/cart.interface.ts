import { Document } from 'mongoose';
import { Item } from 'src/items/interfaces/item.interface';
import { User } from 'src/users/interfaces/user.interface';

export interface Cart extends Document{
    readonly owner: User;
    readonly items: [{item:Item,quantity:string}];
    readonly createdAt: Date;
}
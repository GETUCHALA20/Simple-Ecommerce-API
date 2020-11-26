import { Document } from 'mongoose';
import { User } from 'src/users/interfaces/user.interface';

export interface Item extends Document{
    readonly owner: User;
    readonly name: string;
    readonly description: string;
    readonly vendorName: string;
    readonly price: string;
    readonly createdAt: Date;
}
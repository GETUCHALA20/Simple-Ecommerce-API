import { Document } from 'mongoose';

export interface Item extends Document{
    readonly owner: string;
    readonly name: string;
    readonly description: string;
    readonly vendorName: string;
    readonly price: string;
    readonly createdAt: Date;
}
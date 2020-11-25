import { Document } from 'mongoose';

interface Address {
    addrl: string,
    addr2: string,
    city: string,
    state: string,
    country: string,
    zip:string,
 }

export interface User extends Document{
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly seller: boolean;
    readonly address: Address;
    readonly createdAt: Date;
}
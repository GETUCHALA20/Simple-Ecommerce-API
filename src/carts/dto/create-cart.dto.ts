export class CreateCartDTO {
    readonly owner: string;
    readonly items: [{item:string,quantity:string}];
    readonly createdAt: Date;
}
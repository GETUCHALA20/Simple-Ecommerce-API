export class CreateUserDTO {
    name: string;
    email: string;
    password: string;
    seller?: boolean;
    address: {
        addrl: string,
        addr2?: string,
        city?: string,
        state?: string,
        country?: string,
        zip?: string,
     };
    createdAt?: Date;

}
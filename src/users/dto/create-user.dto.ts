import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly email: string;

    @ApiProperty()
    readonly password: string;

    @ApiProperty()
    readonly seller: boolean;

    @ApiProperty()
    readonly address: {
        addrl: string,
        addr2: string,
        city: string,
        state: string,
        country: string,
        zip: string,
     };

     @ApiProperty()
    readonly createdAt: Date;

}
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';

@ApiTags('User')
@Controller('user')
export class UsersController {
    constructor(private usersService: UsersService) {

    }

    @Post('/signUp') 
    async create(@Body() createUserDto: CreateUserDTO) {
        return await this.usersService.create(createUserDto);
    }

    
}

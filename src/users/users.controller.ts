import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {

    }

    @Post() 
    async create(@Body() createUserDto: CreateUserDTO) {
        return await this.usersService.create(createUserDto);
    }

    
}

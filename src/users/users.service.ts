import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDTO) {

    let createdUser = new this.userModel(createUserDto);
    return await createdUser.save();

  }

  async findOneByEmail(email): Model<User> {

    return await this.userModel.findOne({email: email});

  }
}

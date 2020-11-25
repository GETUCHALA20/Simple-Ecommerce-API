import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { PassportModule } from '@nestjs/passport/dist/passport.module';
import { UserSchema } from './schemas/user.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false })
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}

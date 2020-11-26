import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CartSchema } from './schemas/cart.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Cart', schema: CartSchema}]),],
  providers: [CartsService],
  controllers: [CartsController]
})
export class CartsModule {}

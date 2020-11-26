import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './schemas/item.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Item', schema: ItemSchema}]),],
  providers: [ItemsService],
  controllers: [ItemsController]
})
export class ItemsModule {}

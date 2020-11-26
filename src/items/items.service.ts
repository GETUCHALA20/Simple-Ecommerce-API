import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { CreateItemDTO } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>){}

    // fetch all Item per page
    async getAllItem(options): Promise<Item[]> {
        // sort([['price', -1]])
        const items = await this.itemModel.find().populate("owner")
        .skip(0)
        .limit(9);
        return items;
    }

    // Get a single item
    async getItem(id): Promise<Item> {
        const item = await this.itemModel.findById(id).populate("owner").exec();
        return item;
    }

    // post a single item
    async addItem(createItemDTO: CreateItemDTO): Promise<Item> {
        const newItem = await this.itemModel(createItemDTO);
        return newItem.save();
    }

    // Edit item details
    async updateItem(id, createItemDTO: CreateItemDTO): Promise<Item> {
        const updatedItem = await this.itemModel
            .findByIdAndUpdate(id, createItemDTO, { new: true });
        return updatedItem;
    }
    // Delete a single item
    async deleteItem(id): Promise<any> {
        const deletedItem = await this.itemModel.findByIdAndRemove(id);
        return deletedItem;
    }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCartDTO } from './dto/create-cart.dto';
import { Cart } from './interfaces/cart.interface';

@Injectable()
export class CartsService {
    constructor(@InjectModel('Cart') private readonly cartModel: Model<Cart>) {}

    async cartDetails(userId: string) {
        const cart = await this.cartModel
          .find({ owner: userId })
          .populate('owner')
          .populate('items.item');
    
        if (!cart) {
          throw new HttpException('No Orders Found', HttpStatus.NO_CONTENT);
        }
        return cart;
    }    

    async addToCart(itemId:string, quantity:number, userId: string) {
      let cart = await this.cartModel.findOne({ owner:userId });

      if (cart) {
        //cart exists for user
        let itemIndex = cart.items.findIndex(p => p.item == itemId);
  
        if (itemIndex > -1) {
          //product exists in the cart, update the quantity
          let item = cart.items[itemIndex];
          item.quantity += quantity;
          cart.products[itemIndex] = item;
        } else {
          //product does not exists in cart, add new item
          cart.products.push({ item:itemId});
        }
        await cart.save();
        return cart;
      } else {
        //no cart for user, create new cart
      const newCart = await this.cartModel.create({
          owner: userId,
          items: [{ item:itemId }]
        });
      
      return newCart;
  
      }
    }

    async addMultipleItemToCart(createCartDTO: CreateCartDTO){
      const { _id } = await this.cartModel.create(createCartDTO);
      
      let order = await this.cartModel
        .findById(_id)
        .populate('owner')
        .populate('products.product');
      return order;
    }

    async removeItemFromCart(userId: string, itemId:string){
      let cart = await this.cartModel.findOne({ owner:userId });

      if (cart) {
        let itemIndex = cart.items.findIndex(p => p.item == itemId);
        if (itemIndex > -1) {
          cart.items.splice(itemIndex, 1);
        }
        await cart.save()
      }
      return cart;
    }
}

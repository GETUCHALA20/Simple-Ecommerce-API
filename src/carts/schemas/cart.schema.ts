import * as mongoose from 'mongoose';

export const CartSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    items: [
        {
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item'
            },
            quantity: {
                type: Number,
                default: 0
            }
        }
    ],
    createdAt: { type: Date, default: Date.now }
})
import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    description: String,
    vendorName: String,
    image: String,
    price: String,
    createdAt: { type: Date, default: Date.now }
})
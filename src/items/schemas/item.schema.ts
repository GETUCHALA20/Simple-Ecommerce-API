import * as mongoose from 'mongoose';
// tslint:disable-next-line:prefer-const
import mongoosePaginate = require('mongoose-paginate');

export const ItemSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    description: String,
    vendorName: String,
    price: String,
    createdAt: { type: Date, default: Date.now }
})

ItemSchema.plugin(mongoosePaginate);
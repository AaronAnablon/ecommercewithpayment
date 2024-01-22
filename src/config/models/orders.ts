import mongoose, { Document, Schema, Model, model } from 'mongoose';

interface OrdersAttributes {
    product: string;
    desc: string;
    total: number;
    email: string;
}

export interface OrdersDocument extends OrdersAttributes, Document { }

const OrdersSchema: Schema<OrdersDocument> = new Schema(
    {
        product: String,
        desc: String,
        total: Number,
        email: String,
    },
    {
        timestamps: true,
    }
);

const Orders: Model<OrdersDocument> = mongoose.models.Orders || model('Orders', OrdersSchema);

export default Orders;

import mongoose, { Document, Schema, Model, model } from 'mongoose';

interface ProductssAttributes {
    brand: string;
    category: string;
    description: string;
    image: string;
    isNew: string;
    previousPrice: number;
    price: number;
    quantity: string;
    title: string;
    link: string;
}

export interface ProductssDocument extends ProductssAttributes, Document { }

const ProductssSchema: Schema<ProductssDocument> = new Schema(
    {
        brand: String,
        category: String,
        description: String,
        image: String,
        isNew: String,
        previousPrice: Number,
        price: Number,
        quantity: String,
        title: String,
        _id: String,
        link: String,
    },
    {
        timestamps: true,
    }
);

const Productss: Model<ProductssDocument> = mongoose.models.Productss || model('Products', ProductsSchema);

export default Productss;

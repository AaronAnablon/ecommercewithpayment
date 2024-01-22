import mongoose, { Document, Schema, Model, model } from 'mongoose';

interface AccountsAttributes {
  name: string;
  email: string;
}

export interface AccountsDocument extends AccountsAttributes, Document {}

const AccountsSchema: Schema<AccountsDocument> = new Schema(
  {
    name: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

const Accounts: Model<AccountsDocument> = mongoose.models.Accounts || model('Accounts', AccountsSchema);

export default Accounts;

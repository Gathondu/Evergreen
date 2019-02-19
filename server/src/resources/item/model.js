import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  status: {
    type: String,
    required: true,
    enum: ['bought', 'notbought', 'tobuy'],
    default: 'notbought'
  },
  notes: String,
  quantity: Number,
  unitPrice: Number,
  list: {
    type: mongoose.SchemaTypes.ObjectId,
    ref:'list',
    required: true
  }
});

itemSchema.virtual('url').get(() => { return '/item/' + this._id});

export const Item = mongoose.model('item', itemSchema);
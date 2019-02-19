import mongoose from 'mongoose'

const listSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  description: String,
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user',
    required: true
  },
  modified:Date
},
{timestamps: true});

listSchema
  .virtual('url')
  .get(function () {
    return '/list/'+ this._id;
  });

listSchema.index({user: 1, name: 1}, {unique: true});

export const List = mongoose.model('list', listSchema);
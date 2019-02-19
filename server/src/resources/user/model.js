import mongoose from'mongoose'

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required:true,
    trim:true,
    maxlength: 10
  },
  lastName: {
    type: String,
    required:true,
    trim:true,
    maxlength: 10
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
},
  {timestamps: true});

userSchema
  .virtual('name')
  .get(function () {
    return this.firstName+' '+this.lastName;
  });

export const User = mongoose.model('user', userSchema);
import { Item } from '../model'
import mongoose from 'mongoose'

describe('Item model', () => {
  describe('schema', () => {
    test('name', ()=>{
      const name = Item.schema.obj.name;
      expect(name).toEqual({
        type: String,
        required: true,
        trim: true,
        maxLength: 50
      })
    });

    test('status', ()=>{
      const status = Item.schema.obj.status;
      expect(status).toEqual({
        type: String,
        required: true,
        enum: ['bought', 'notbought', 'tobuy'],
        default: 'notbought'
      })
    });

    test('notes', ()=>{
      const notes = Item.schema.obj.notes;
      expect(notes).toEqual(String)
    });

    test('quantity', ()=>{
      const quantity = Item.schema.obj.quantity;
      expect(quantity).toEqual(Number)
    });

    test('unitPrice', ()=>{
      const unitPrice = Item.schema.obj.unitPrice;
      expect(unitPrice).toEqual(Number)
    });

    test('list', ()=>{
      const list = Item.schema.obj.list;
      expect(list).toEqual({
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'list',
        required: true
      })
    });
  });
});
import {User} from '../model'

describe('User model', () => {
  describe('schema', () => {
    test('firstName', () => {
      const first = User.schema.obj.firstName;
      expect(first).toEqual({
        type: String,
        required: true,
        trim: true,
        maxlength: 10
      })
    });

    test('lastName', () => {
      const last = User.schema.obj.lastName;
      expect(last).toEqual({
        type: String,
        required: true,
        trim: true,
        maxlength: 10
      })
    });

    test('email', () => {
      const email = User.schema.obj.email;
      expect(email).toEqual({
        type: String,
        required: true,
        unique: true,
        trim: true
      })
    });

    test('password', () => {
      const password = User.schema.obj.password;
      expect(password).toEqual({
        type: String,
        required: true
      })
    });

    test('name', () => {
      // const first = User.schema.obj.firstName;
      // const last = User.schema.obj.lastName;
      const name = User.schema.obj.name;
      // expect(name).toEqual(first + ' ' + last)
      expect(name).toEqual(String)
    });

    // test('url', () => {
    //   const url = User.schema.obj.url;
    //   expect(url).toEqual(String)
    // });
  });
});
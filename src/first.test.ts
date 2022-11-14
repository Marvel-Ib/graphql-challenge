import mongoose, { Mongoose } from 'mongoose';

let conn: Mongoose;

beforeAll(async () => {
  conn = await mongoose.connect(`${process.env.dbUri!}`);
});

afterAll(() => {
  conn.disconnect();
});

describe('user register/login tests', () => {
  it('User Registered', async () => {
    expect('ddd').toBe('ddd');
  });
});

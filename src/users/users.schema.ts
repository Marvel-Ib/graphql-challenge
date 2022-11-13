// users.schema.ts
import {
  getModelForClass,
  prop,
  pre,
  ReturnModelType,
  queryMethod,
  index,
} from '@typegoose/typegoose';
import { AsQueryMethod } from '@typegoose/typegoose/lib/types';
import { Field, ObjectType, InputType } from 'type-graphql';

@InputType()
export class createUserInput {
  @Field()
  username: string;
}

@InputType()
export class accountInput {
  @Field({ nullable: true })
  accountName: string;
  @Field({ nullable: true })
  bankCode: string;
  @Field({ nullable: true })
  bankAccountNumber: string;
}

@ObjectType()
export class User {
  @Field()
  @prop({ required: true, unique: true })
  username: string;
  @Field()
  @prop({ required: true })
  isVerified: boolean;
}
export const UserModel = getModelForClass(User);

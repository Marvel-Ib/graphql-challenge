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
export class accountInput {
  @Field({ nullable: true })
  accountName: string;
  @Field({ nullable: true })
  bankCode: string;
  @Field({ nullable: true })
  bankAccountNumber: string;
}

@InputType()
export class accountNameInput {
  @Field({ nullable: true })
  bankCode: string;
  @Field({ nullable: true })
  bankAccountNumber: string;
}

@ObjectType()
export class accountDetails {
  @Field()
  @prop({ required: true })
  bankAccountNumber: string;
  @Field()
  @prop({ required: true })
  accountName: string;
  @prop({ required: true })
  bankCode: string;
}
export const accountModel = getModelForClass(accountDetails);

// users.schema.ts

import { Field, ObjectType, InputType } from 'type-graphql';

@ObjectType()
export class User {
  @Field()
  id!: number;
  @Field()
  name!: string;
  @Field()
  isVerified!: boolean;
}

@InputType()
export class accountInput {
  @Field()
  accountName!: string;
  @Field()
  bankName!: string;
  @Field()
  bankAccountNumber!: string;
}

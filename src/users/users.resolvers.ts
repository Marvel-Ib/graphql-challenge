// users.resolvers.ts

import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import { accountInput, User, createUserInput } from './users.schema';
import UserService from '../service/user.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Mutation(() => User)
  async createUserInput(@Arg('input') input: createUserInput): Promise<User> {
    const user = {
      name: input.username,
      isVerified: false,
    };
    return this.userService.createUser(user);
  }
}

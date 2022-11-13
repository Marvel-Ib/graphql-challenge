// users.resolvers.ts

import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import { accountInput, User } from './users.schema';

@Resolver(() => User)
export class UsersResolver {
  private users: User[] = [
    { id: 1, name: 'John Doe', isVerified: false },
    { id: 2, name: 'Jane Doe', isVerified: false },
    { id: 3, name: 'Mike Doe', isVerified: false },
  ];

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return this.users;
  }

  @Mutation(() => User)
  async createUser(@Arg('input') input: accountInput): Promise<User> {
    console.log('verify user account');
    return { id: 1, name: 'baba riga', isVerified: false };
  }
}

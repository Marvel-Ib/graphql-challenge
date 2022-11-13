import { UserModel } from '../users/users.schema';
class UserService {
  async createUser(input: any) {
    // call user model to create a user
    const ok = await UserModel.create(input);
    console.log(ok, 'enter hete', input);
    return ok;
  }

  async getUsers() {
    const result = await UserModel.find();
    console.log(result, "let's see");
    return result;
  }
}

export default UserService;

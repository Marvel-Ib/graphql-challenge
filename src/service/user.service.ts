import { UserModel } from '../users/users.schema';
class UserService {
  async createUser(input: any) {
    // call user model to create a user
    const ok = await UserModel.create(input);
    return ok;
  }

  async getUsers() {
    const result = await UserModel.find();
    return result;
  }
}

export default UserService;

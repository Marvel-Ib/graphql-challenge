import { accountModel, accountNameInput } from '../accounts/accounts.schema';
class AccountService {
  async createAccount(input: any) {
    // call user model to create a user
    const ok = await accountModel.create(input);
    return ok;
  }

  async getAccountName(input: accountNameInput) {
    const result = await accountModel.findOne({
      bankCode: input.bankCode,
      bankAccountNumber: input.bankAccountNumber,
    });
    console.log(result, 'ejowork');
    return result;
  }
}

export default AccountService;

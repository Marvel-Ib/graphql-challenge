// users.resolvers.ts

import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import levenshtein from 'js-levenshtein';
import {
  accountInput,
  accountDetails,
  accountNameInput,
} from './accounts.schema';
import AccountService from '../service/account.service';
import { Maylancer } from '../service/maylancer';

@Resolver(() => accountDetails)
export class AccountResolver {
  constructor(
    private accountService: AccountService,
    private maylancer: Maylancer
  ) {
    this.accountService = new AccountService();
    this.maylancer = new Maylancer();
  }

  @Query(() => accountDetails)
  async getAccountName(@Arg('input') input: accountNameInput) {
    const accountResult = await this.accountService.getAccountName(input);
    console.log(accountResult, 'chekc now');
    if (accountResult) {
      return accountResult!;
    } else {
      return {
        accountName:
          'account-number/bank-code not found have you tried the mutatrion verifyUserAccount',
        bankAccountNumber:
          'account-number/bank-code not found have you tried the mutatrion verifyUserAccount',
        bankCode:
          'account-number/bank-code not found have you tried the mutatrion verifyUserAccount',
      };
    }
  }

  @Mutation(() => accountDetails)
  async verifyUserAccount(
    @Arg('input') input: accountInput
  ): Promise<accountDetails> {
    const details = await this.maylancer.verifyAccountNumber(
      input.bankAccountNumber,
      input.bankCode
    );

    if (details.status === 'error') {
      return {
        accountName: 'invalid',
        bankAccountNumber: 'invalid',
        bankCode: 'invalid',
      };
    }

    if (
      levenshtein(details.account_name, input.accountName.toUpperCase()) <= 2
    ) {
      const account = {
        accountName: input.accountName,
        bankAccountNumber: input.bankAccountNumber,
        bankCode: input.bankCode,
      };
      return this.accountService.createAccount(account);
    } else {
      return {
        accountName: 'name failed levenshtein test',
        bankAccountNumber: 'name failed levenshtein test',
        bankCode: 'name failed levenshtein test',
      };
    }
  }
}

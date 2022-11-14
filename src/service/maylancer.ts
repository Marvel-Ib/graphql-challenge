import axios from 'axios';

export class Maylancer {
  secret_key: any;
  base_url: any;
  constructor() {
    this.base_url = process.env.base_url;
  }

  async verifyAccountNumber(account_number: string, bank_code: string) {
    try {
      const { data, status } = await axios.get(
        `${this.base_url}?account_number=${account_number}&bank_code=${bank_code}`,
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );
      return data;
    } catch (err: any) {
      return err;
    }
  }
}

import axios from 'axios';

export class flutterwave {
  secret_key: any;
  base_url: any;
  constructor() {
    this.secret_key = process.env.paystackKey;
    this.base_url = process.env.base_url;
  }

  async listBanks() {
    const { data, status } = await axios.get(`${this.base_url}/banks/NG`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${this.secret_key}`,
      },
    });

    return data;
  }

  async returnSupportedBanks(hmm: string) {
    return 'we no support any at the moment';
  }

  async verifyAccountNumber(account_number: string, bank_code: string) {
    try {
      const dat = {
        account_number: '0690000032',
        account_bank: '044',
      };
      const headers = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.secret_key}`,
          Accept: 'application/json',
        },
      };

      const { data, status } = await axios.post(
        `${this.base_url}/accounts/resolve`,
        dat,
        headers
      );
      return data;
    } catch (e) {
      console.error(e);
    }
  }
}

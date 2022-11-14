# Graphql 

## notes

### What technology am i using?
* [TypeGraphQL](https://typegraphql.com/)
* [TypeGoose](https://typegoose.github.io/typegoose/)

### All bank codes are supported. examples of banks and there bank code:  
* Kuda Bank -- 50211
* First Bank of Nigeria -- 011
* Access Bank -- 044
* GtBank -- 058
* Zenith Bank -- 057
* United Bank for Africa -- 033

### Could not use flutterwave and paystack
* there verify account endpoints did not seems to work without being full verified. both threw errors consistently
* had to look for another api and utilize it: https://maylancer.org/api/nuban/
* this api returns account full name in this order : [surname] [first name] [middle name]

###  Levenshtein Distance algorithm more effective than Damerau–Levenshtein Distance algorithm
* update needed 

---

## Queries & mutations


###  verify user account
Query
```
mutation {
  verifyUserAccount(input:{
    bankCode: "058",
    bankAccountNumber: "123456789",
    accountName: "surname firstName middleName"
  }){
    bankAccountNumber,
    accountName,
  }
}
```

### Get account name 
Query
```
{
    getAccountName(input:{
     bankCode:"058",
     bankAccountNumber:"123456789"
   })
   {
    accountName,
    bankAccountNumber
   }
 }
```






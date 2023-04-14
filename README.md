# koinx_backend_interview_tasks



**Develop a Server Side Application to fetch Crypto Transactions of a user
Mandatory Tasks:-**

**Task 1:**
1. Develop an API using Node.js to fetch the crypto transactions of a user.
2. You can use the Etherscan API(https://docs.etherscan.io/api-endpoints/accounts) to fetch the list of “Normal” transactions for a user. You can use this address for testing:-
0xce94e5621a5f7068253c42558c147480f38b5e0d. You will have to create your own
free API Key for testing purposes.
3. The input for the API will be the address of a user. The output would be the list of transactions for this address. You would also have to store these transactions
against this address in a database, preferably MongoDB.

**Task 2:**

1. Build a system within the same server to fetch the price of Ethereum every 10
minutes and store it in the database.
2. You can use this API for the same: https://api.coingecko.com/api/v3/simple/price?ids=ethereum&amp;vs_currencies=ir

**Task 3:**

1. Develop a `GET` API for a user where they give their address as an input and get their current balance and current price of ether as output.
2. The balance should be calculated from the transactions of the user. If the "to"
address is of the user, the “value” property gets added to the user’s balance. If the “from” address is of the user, the “value” property gets deducted from the user’s balance. These transactions are the ones that were fetched in the previous tasks. 

Please host your code
on GitHub.

**Optional Tasks:-**

1. Deploy your database using MongoDB Atlas or other similar tools.
2. Deploy your backend using platforms like Heroku or any cloud platform like AWS, GCP or Azure and expose the API to the public.
 

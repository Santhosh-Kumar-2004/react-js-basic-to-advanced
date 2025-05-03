import { Client, Account } from 'appwrite';

const client = new Client();

client.setEndpoint('https://fra.cloud.appwrite.io/v1')
client.setProject('6815bd8a000542a6c03c');

const account = new Account(client);

export { account };
import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('6820f36d000ab3854cb4')
    .setPlatform('com.xiontrials123.notesapp');

export const account = new Account(client);

export const avatars = new Avatars(client);

export const createAccount = async (email: string, password: string, name: string) => {
  try {
    const response = await account.create('unique()', email, password, name);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
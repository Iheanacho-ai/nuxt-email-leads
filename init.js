import { Appwrite } from 'appwrite';
export const sdk = new Appwrite();
sdk
  .setEndpoint('http://localhost/v1') // Replace this with your endpoint
  .setProject('62b04c3ef00a5209b680'); // Replace this with your ProjectID


sdk.account.createAnonymousSession().then(
    (response) => {
        console.log(response);
    },
    (error) => {
        console.log(error);
    }
); 
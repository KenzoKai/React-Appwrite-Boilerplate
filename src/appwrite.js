import {Account, Client, Databases, Permission} from 'appwrite';

const client = new Client();
const account = new Account(client)
const database = new Databases(client)
const permission = new Permission()

client
    .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT)
    .setProject(process.env.REACT_APP_APPWRITE_PROJID);

const user_logout = account.deleteSession();
user_logout.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});

export {
    account,
    client,
    database,
    permission,
    user_logout
};
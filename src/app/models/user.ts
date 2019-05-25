import userPermission from './userPermission';

export default class User {
    id:number;
    username:string;
    email:string;
    password:string;
    userPermission:userPermission;
}
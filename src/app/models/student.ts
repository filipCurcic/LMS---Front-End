import Address from './address';
import RegisteredUser from './registeredUser';

export class Student{
    id:number;
    deleted: boolean;
    name:string;
    lastName: string;
    jmbg: string;
    registeredUser: RegisteredUser;
    address: Address
}
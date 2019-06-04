import Address from './address';
import studentsOnYear from './studentsOnYear';
import RegisteredUser from './registeredUser';

export default class Student {
    id:number;
    jmbg:number;
    name:string;
    surname:string;
    profilePicturePath:string;
    address:Address;
    studentYears:studentsOnYear[];
    user:RegisteredUser;
    

}
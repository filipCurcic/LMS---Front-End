import Address from './address';
import studentsOnYear from './studentsOnYear';
import User from './user';

export default class Student {
    id:number;
    jmbg:number;
    name:string;
    surname:string;
    profilePicturePath:string;
    address:Address;
    studentYears:studentsOnYear[];
    user:User;
    

}
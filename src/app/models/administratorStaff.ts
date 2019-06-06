import RegisteredUser from './registeredUser';
import Address from './address';

export default class AdministratorStaff {
    id:number;
    name:string;
    surname:string;
    jmbg:string;
    profilePicturePath:string;
    registeredUser: RegisteredUser;
    address: Address;
    
    
}
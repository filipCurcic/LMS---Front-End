import StudyCourse from './studyCourse';
import University from './university';
import Address from './address';
import Professor from './professor';

export default class Faculty {
    id:number;
    name:string;
    contant:string;
    email:string;
    description:string;
    studyCourse:StudyCourse[];
    university:University;
    address:Address;
    professors:Professor[];
    
}
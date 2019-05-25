import Faculty from './faculty';
import Address from './address';
import Professor from './professor';

export default class University {
    id:number;
    name:string;
    establishmentDate:Date;
    contact:string;
    email:string;
    description:string;
    faculties:Faculty[];
    address:Address;
    professors:Professor[];
}
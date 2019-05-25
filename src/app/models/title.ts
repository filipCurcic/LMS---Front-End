import TitleType from './titleType';
import ScientificField from './scientificField';
import Professor from './professor';

export default class Title {
    id:number;
    name:string;
    dateOfSelection:Date;
    dateOfCessation:Date;
    titleType:TitleType;
    scientificField:ScientificField;
    professor:Professor;
    
}
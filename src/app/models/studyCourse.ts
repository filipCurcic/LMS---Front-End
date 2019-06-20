import Faculty from './faculty';
import StudyCourseTeacher from './studyCourseTeacher';

export default class StudyCourse {
    id:number;
    name:string;
    faculty:Faculty;
    imgPath: string;
    studyCourseTeacher:StudyCourseTeacher[];

}
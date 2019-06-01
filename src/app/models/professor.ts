import Title from './title';
import TeacherOnRealization from './teacherOnRealization';
import University from './university';
import StudyCourseTeacher from './studyCourseTeacher';
import Faculty from './faculty';
import Address from './address';
import User from './user';

export default class Professor {
    id:number;
    name:string;
    biography:string;
    jmbg:string;
    profilePicturePath:string;
    titles:Title[];
    teachersOnRealization:TeacherOnRealization[];
    universityDto:University[];
    studyCourseTeacher:StudyCourseTeacher;
    facultyDto:Faculty[];
    address:Address;
    registeredUserDto:User;

}
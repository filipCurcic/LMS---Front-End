import Title from './title';
import TeacherOnRealization from './teacherOnRealization';
import University from './university';
import StudyCourseTeacher from './studyCourseTeacher';
import Faculty from './faculty';
import Address from './address';
import RegisteredUser from './registeredUser';

export default class Professor {
    id:number;
    name:string;
    biography:string;
    jmbg:string;
    profilePicturePath:string;
    titles:Title[];
    teachersOnRealization:TeacherOnRealization[];
    university:University;
    studyCourseTeacher:StudyCourseTeacher;
    faculty:Faculty;
    address:Address;
    user:RegisteredUser;

}
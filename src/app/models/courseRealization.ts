import TeacherOnRealization from './teacherOnRealization';
import CourseAttending from './courseAttending';
import Course from './course';
import Exam from './Exam';
import StudyYear from './studyYear';

export default class CourseRealization {
    id:number;
    startDate:Date;
    endDate:Date;
    studyYear:StudyYear;
    teacherOnRealization:TeacherOnRealization[];
    courseAttendings:CourseAttending;
    course:Course;
    exam:Exam[];
}
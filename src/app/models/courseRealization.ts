import TeacherOnRealization from './teacherOnRealization';
import CourseAttending from './courseAttending';
import Course from './course';

export default class CourseRealization {
    id:number;
    startDate:Date;
    endDate:Date;
    teacherOnRealization:TeacherOnRealization;
    courseAttendings:CourseAttending;
    course:Course;
}
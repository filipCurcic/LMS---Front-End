import Professor from './professor';
import TeachingType from './teachingType';
import CourseRealization from './courseRealization';

export default class TeacherOnRealization {
    id:number;
    numberOfClasses:number;
    teacher:Professor;
    courseRealization: CourseRealization
}
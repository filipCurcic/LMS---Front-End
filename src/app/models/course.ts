import CourseRealization from './courseRealization';
import StudyYear from './studyYear';
import CourseOutcome from './courseOutcome';

export default class Course {
    id:number;
    name:string;
    epsb:number;
    mandatory:boolean;
    numberOfLectures:number;
    numberOfExercises:number;
    otherTypesOfTeachings:number;
    researchWork:number;
    otherClasses:number;
    courseRealizations:CourseRealization[];
    yearsOfStudy:StudyYear;
    syllabus:CourseOutcome[];
    precondition:Course;
    preconditionFor:Course[];
}
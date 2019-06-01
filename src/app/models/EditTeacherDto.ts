import Professor from './professor';
import User from './user';

export default class EditTeacherDto {
    professor:Professor;
    user:User;

    setAttributes(pr:Professor, us:User):void {
        this.professor = pr;
        this.user = us;
    }
}
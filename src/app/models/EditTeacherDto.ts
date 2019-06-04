import Professor from './professor';
import registeredUser from './registeredUser';

export default class EditTeacherDto {
    professor:Professor;
    user:registeredUser;

    setAttributes(pr:Professor, us:registeredUser):void {
        this.professor = pr;
        this.user = us;
    }
}
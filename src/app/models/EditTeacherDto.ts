import Professor from './professor';
import { RegisteredUser } from './registeredUser';

export default class EditTeacherDto {
    professor:Professor;
    registeredUuser: RegisteredUser

    setAttributes(pr:Professor, us:RegisteredUser):void {
        this.professor = pr;
        this.registeredUuser = us;
    }
}
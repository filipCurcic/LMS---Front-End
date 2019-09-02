import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import  administratorStaff  from '../../models/administratorStaff'
import { Student } from 'src/app/models/student';
import StudyYear from 'src/app/models/studyYear';


@Injectable({
  providedIn: 'root'
})


export class AdministratorStaffService {


  constructor(private http: HttpClient) {

   }

   private administratorStaffUrl = 'http://localhost:8080/administrator-staff';


   getAdminStaffs() {
    return this.http.get<administratorStaff[]>(this.administratorStaffUrl+`/all`);
  }

  getAdminStaff(id:String) {
    return this.http.get<administratorStaff>(this.administratorStaffUrl+`/${id}`);
  }

  getOneByUsername(username: String) {
    return this.http.get<administratorStaff>(this.administratorStaffUrl+`/username/${username}`);
  }

  deleteAdminStaff(id: String) {
    return this.http.delete(this.administratorStaffUrl+`/${id}`);
  }


  addAdminStaff(adminStaff:administratorStaff, image:File) {
    const postData = new FormData();
    if(image) {
      postData.append("profileImage", image, image.name);
    } postData.append("data", JSON.stringify(adminStaff));
    return this.http.post(this.administratorStaffUrl+'/add', postData);
  }

  updateAdminStaff(username: String, adminStaff:administratorStaff, image: File) {
    const postData = new FormData();
    if(image) {
      postData.append("profileImage", image, image.name);
    }
    postData.append("data", JSON.stringify(adminStaff));
    return this.http.put(this.administratorStaffUrl+`/username/${username}`, postData)
  }

  getStudentsForEnrollmentToTheNextYear(studyYearId: number) {
    return this.http.get<Student[]>(this.administratorStaffUrl+`/enrollment/${studyYearId}`);
  }

  enrollmentToTheNextYear(student: Student, studyYear: StudyYear){
    return this.http.put(this.administratorStaffUrl+`/enroll/${student.id}`, studyYear);
  }

}

import { Injectable } from '@angular/core';
import Professor from 'src/app/models/professor';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {

  constructor(private http: HttpClient) { }

  private professorUrl = 'http://localhost:8080/teacher';

  
  getProfessors():Observable<Professor[]> {
    return this.http.get<Professor[]>(this.professorUrl+`/all`);
  }

  getProfessor(id:number):Observable<Professor[]> {
    return this.http.get<Professor[]>(this.professorUrl+`/${id}`);
  }

  getProfessorByUsername(username: String) {
    return this.http.get<Professor>(this.professorUrl + `/username/${username}`)
  }

  addProfessor(professor:Professor, image:File) {
    const postData = new FormData();
    if(image) {
         postData.append("profileImage", image, image.name); 
     } postData.append("data", JSON.stringify(professor));
    return this.http.post(this.professorUrl+'/add', postData);
  }

  deleteProfessor(id: String) {
    return this.http.delete(this.professorUrl+`/${id}`);
  }

  updateProfessor(username: string, professor:Professor, image: File) {
    const postData = new FormData();
    if(image) {
      postData.append("profileImage", image, image.name);
    }
    postData.append("data", JSON.stringify(professor));
    return this.http.put(this.professorUrl+`/username/${username}`, postData)
  }

}

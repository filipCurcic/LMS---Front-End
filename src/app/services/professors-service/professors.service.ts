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

  private serviceUrl1 = 'http://localhost:8080/profesori';

  getProfessors():Observable<Professor[]> {
    return this.http.get<Professor[]>(this.professorUrl+`/all`);
  }

  getProfessor(id:number):Observable<Professor[]> {
    return this.http.get<Professor[]>(this.professorUrl+`/${id}`);
  }

  addProfessor(professor:Professor, image:File) {
    const postData = new FormData();
    postData.append("profileImage", image, image.name);
    postData.append("data", JSON.stringify(professor));
    return this.http.post(this.professorUrl+'/add', postData);
  }

  deleteprofessor(id: String) {
    return this.http.delete(this.professorUrl+`/${id}`);
  }

  updateprofessor(id:string, professor:Professor) {
    return this.http.put(this.professorUrl+`/${id}`, professor)
  }


}

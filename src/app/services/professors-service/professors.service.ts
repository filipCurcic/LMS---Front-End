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

  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  private serviceUrl1 = 'http://localhost:8080/profesori';

  getProfessors():Observable<Professor[]> {
    return this.http.get<Professor[]>(this.serviceUrl);
  }

  getProfessor(id:number):Observable<Professor[]> {
    return this.http.get<Professor[]>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }


  addProfessor(professor:Professor):Observable<Professor> {
    console.log("servis")
    return this.http.post<Professor>(this.serviceUrl1, professor, httpOptions);
  }
}

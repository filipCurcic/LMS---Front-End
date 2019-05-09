import { Injectable } from '@angular/core';
import Professor from 'src/app/models/professor';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {

  constructor(private http: HttpClient) { }

  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  getProfessors():Observable<Professor[]> {
    return this.http.get<Professor[]>(this.serviceUrl);
  }

  getProfessor(id:number):Observable<Professor[]> {
    return this.http.get<Professor[]>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from 'src/app/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl+`/all`);
  }

  getUser(id:number):Observable<User> {
    return this.http.get<User>(this.usersUrl+`/${id}`);
  }

  deleteUser(id: number) {
    return this.http.delete(this.usersUrl+`/${id}`);
  }

  addUser(user:User, image:File) {
    const postData = new FormData();
    postData.append("profileImage", image, image.name);
    postData.append("data", JSON.stringify(user));
    return this.http.post(this.usersUrl+'/add', postData);
  }

  updateUser(id:number, user:User) {
    return this.http.put(this.usersUrl+`/${id}`, user)
  }


}

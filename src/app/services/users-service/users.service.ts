import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from 'src/app/models/registeredUser';
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

  deleteuser(id: number) {
    return this.http.delete(this.usersUrl+`/${id}`);
  }

  adduser(user:User, image:File) {
    const postData = new FormData();
    postData.append("profileImage", image, image.name);
    postData.append("data", JSON.stringify(user));
    return this.http.post(this.usersUrl+'/add', postData);
  }

  updateuser(id:string, user:User) {
    return this.http.put(this.usersUrl+`/${id}`, user)
  }


}

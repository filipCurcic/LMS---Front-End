import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users-service/users.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import User from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private UserService:UsersService) { }

  ngOnInit() {
  }

  displayedColumns = ['id', 'username', 'email', 'permissions', 'actionsEdit', 'actionsDelete'];

}

export class UsersDataSource extends DataSource<any> {
  constructor(private UserService: UsersService) {
    super();
  }

  connect(): Observable<User[]> {
    return this.UserService.getUsers();
  }

  disconnect() {

  }
}
import { Component } from '@angular/core';
import { AuthorizationService } from './services/login-service/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authorizationService : AuthorizationService){}

  logout() {
    this.authorizationService.logout();
  }

}

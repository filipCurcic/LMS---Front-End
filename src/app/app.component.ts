import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './services/login-service/authorization.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn = false;

  private loggedInSubcription : Subscription;


  constructor(private authorizationService : AuthorizationService){}

  ngOnInit() {
    this.isLoggedIn = this.authorizationService.isLoggedIn();
    this.loggedInSubcription = this.authorizationService.loggedInStatusChanged.subscribe(
      (status: boolean)=>{
        this.isLoggedIn = status;
      }
    );
  
  
  }
  onLogout(){
    this.authorizationService.logout();
  }
  
  ngOnDestroy(){
    this.loggedInSubcription.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin-service/admin.service'
import { Administrator } from '../../models/administrator';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  administrators : Administrator[] = [];
  administrator : Administrator = new Administrator();
  
  constructor(private administratorService: AdminService) {

   }

  ngOnInit() {
    this.getAllAdministrators();
  }

  getAllAdministrators(){
    this.administratorService.getAllAdministrators().subscribe((data: Administrator[]) => {
      this.administrators = data;
    });
  }

  getOneAdministrator(id: string) {
    this.administratorService.getOneAdministrator(id).subscribe((data) => {
      this.getAllAdministrators();
    })
  }

  addAdministrator(admin: Administrator) {
    this.administratorService.addAdministrator(admin).subscribe(() => {
      this.getAllAdministrators();
    })
  }

  deleteAdministrator(id: string) {
    this.administratorService.deleteAdministrator(id).subscribe((data) => {
      this.getAllAdministrators();
    })
  }

  editAdministrator(id: string, admin: Administrator) {
    this.administratorService.updateAdministrator(id, admin).subscribe((data) => {
      this.getAllAdministrators();
    })
  }
}
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username: string ="";
  password: string ="";

  user:boolean=false;
  loginForm: any
  constructor(public dialog: MatDialog, private auth:AuthserviceService, private router:Router) {
    this.auth._isLoggedIn.subscribe(data=>{
      this.user=data;
    });
  }

  logOut(){
    this.auth._isLoggedIn=false;
    this.router.navigate([''])
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      data: {username: this.username, password: this.password},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loginForm = result;
    });
  }
}

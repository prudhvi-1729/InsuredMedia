import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { loginData } from './loginData';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  error:boolean=false;
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: loginData,
    private authService:AuthserviceService
  ) {}
  
  onSubmit(): void {
    this.authService.getUsers().subscribe((ele: any)=>{
      for(let i=0 ; i< ele.length; i++){
        if (ele[i].username === this.data.username && ele[i].password === this.data.password)
        {
            console.log("User Found" , ele[i].username);
            this.authService._isLoggedIn=true;
            this.dialogRef.close();
        }
    }  
    })
    if(!this.authService._isLoggedIn){
      this.error=true
    }
  }
}

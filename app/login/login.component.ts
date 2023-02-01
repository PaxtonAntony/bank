import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  acno=""
  psw=""

data="welcome to SBI BANK"
  input="account number"
  constructor(private router:Router,private ds:DataService) { }
  ngOnInit(): void{

  }

  login(){
    var acnum=this.acno
    var psw=this.psw
    var userDetails=this.ds.userDetails
    if(acnum in userDetails){
      if(psw==userDetails[acnum]["password"]){
        alert("login successfull")
        this.router.navigateByUrl('dashboard')
      }
          else{
            alert("password is incorrect")
          }
        
      }

    
    else{
      alert("acnum is invalid")
  }

  }
  // acnoChange(event:any){
  //   this.acno=event.target.value
  //  // console.log(this.acno);
    
  // }
  // pwrdChange(event:any){
  //   this.psw=event.target.value
  //   //console.log(this.psw);
    
  // }

  

// login(a:any,b:any){
//   var acnum=a.value
//   var psw=b.value
//   var userDetails=this.userDetails
//   if(acnum in userDetails){
//     if(psw==userDetails[acnum]["password"]){
//       alert("login successfull")
//     }
//         else{
//           alert("password is incorrect")
//         }
      
//     }

  
//   else{
//     alert("acnum is invalid")
//  }
// }


 }

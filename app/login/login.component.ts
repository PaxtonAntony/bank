import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // acno=""
  // psw=""

data="welcome to SBI BANK"
  input="account number"
  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0},
    1001:{acno:1001,username:"amal",password:"abc123",balance:0},
    1002:{acno:1002,username:"arun",password:"abc1234",balance:0},
    1003:{acno:1000,username:"akil",password:"abc1234",balance:0}

  }
  constructor() { }
  ngOnInit(): void{

  }
// }

  // login(){
  //   var acnum=this.acno
  //   var psw=this.psw
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
  // }

  // }
  // acnoChange(event:any){
  //   this.acno=event.target.value
  //  // console.log(this.acno);
    
  // }
  // pwrdChange(event:any){
  //   this.psw=event.target.value
  //   //console.log(this.psw);
    
  // }

  

login(a:any,b:any){
  var acnum=a.value
  var psw=b.value
  var userDetails=this.userDetails
  if(acnum in userDetails){
    if(psw==userDetails[acnum]["password"]){
      alert("login successfull")
    }
        else{
          alert("password is incorrect")
        }
      
    }

  
  else{
    alert("acnum is invalid")
 }
}


}

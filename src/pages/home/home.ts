import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl:NavController) {}
  navigateOtp(){
    this.navCtrl.push('ForgotPage');
  }
  selectedButton :string='user';
  displayContent(button :string):void{
    this.selectedButton=button;
    if(button === 'user'){
      this.mobileNumber="";
      this.password="";
    }
    if(button === 'register'){
      this.Name="";
      this.Email="";
      this.MobileNumber="";
      this.Password="";
    }
  }
  mobileNumber:string;
  password:string;
  error:string;
  loginShowerror(){
    if(!this.mobileNumber || !this.password)
    {
      this.error="please Enter both the fields";
      return ;
    }
  }
  loginDontshowerror(){
    this.error="";
  }

  login(){
    if(!this.mobileNumber || !this.password)
    {
      this.error="please Enter both the fields";
      return ;
    }
    if(this.mobileNumber.length != 10 || parseInt(this.mobileNumber.charAt(0)) < 6 || isNaN(parseInt(this.mobileNumber))){
      this.error="Please Enter valid mobile number";
      return ;
    }
    if(this.password.length < 8 ){
      this.error="Password must contains 8 characters";
      return ;
    }
    this.error="";
  }


  Name:string;
  MobileNumber:string;
  Email:string;
  Password:string;
  Error:string;
  expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  registerShowerror(){
    if(!this.Name || !this.Email || !this.MobileNumber || !this.Password)
    {
      this.Error="please Enter All the fields";
      return ;
    }
    this.Error="";
  }
  registerDontshowerror(){
    this.Error="";
    return;
  }
  register(){
    if(!this.Name ||  !this.Email || !this.MobileNumber || !this.Password)
    {
      this.Error="please Enter All the fields";
      return ;
    }
    if(!this.expression.test(this.Email)){
      this.Error="please Enter valid Email Address";
      return ;
    }
    if( this.MobileNumber.length != 10 || parseInt(this.MobileNumber.charAt(0)) < 6 || isNaN(parseInt(this.MobileNumber))){
      this.Error="Please Enter valid mobile number";
      return ;
    }
    if(this.Password.length < 8 ){
      this.Error="Password must contains 8 characters";
      return ;
    }
    this.Error="";
  }
}


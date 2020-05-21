import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  public signinForm: any;
  public isCredentialsInvalid: boolean;
  public exitsErrorOnResponse: boolean;
  public showLogin: boolean;
  public signupForm: any;
  public existEmail: boolean;


  constructor() {
    this.signinForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    this.signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.email]),
      lastName: new FormControl('', [Validators.required, Validators.email]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    this.isCredentialsInvalid = false;
    this.exitsErrorOnResponse = false;
    this.showLogin = true;
  }

  ngOnInit(): void {
  }


  onSignIn() {
  }

  onSignUp() {
  }


  toggleAuthMode(): void {
    this.showLogin = !this.showLogin;
  }

}

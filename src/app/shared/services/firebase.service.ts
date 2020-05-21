import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    firebaseAuth: AngularFireAuth,
    router: Router,
    
  ) { }
}

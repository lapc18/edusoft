import { Injectable, Provider } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User as fUser } from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap, first, map } from 'rxjs/operators';
import { User } from '../models/user';
import { Institution } from '../models/institution';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private userPath: string = '/users';
  private studentPath: string = '/students';
  private institutionPath: string = '/institutions';

  private userRef: AngularFirestoreCollection<User> = null;
  private studentRef: AngularFirestoreCollection<Student> = null;
  private institutionRef: AngularFirestoreCollection<Institution> = null;


  private user$: Observable<User>;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {

    this.userRef = afs.collection(this.userPath);
    this.studentRef = afs.collection(this.studentPath);
    this.institutionRef = afs.collection(this.institutionPath);

    this.user$ = this.firebaseAuth.authState.pipe(
      switchMap(user => {
        if (user)
          return this.afs.doc<User>(`${this.userPath}/${user.uid}`).valueChanges();
        else
          return of(null);
      })
    );

  }


  public async signIn(user: string, pwd: string): Promise<void> {
    await this.firebaseAuth.signInWithEmailAndPassword(user, pwd);
  }

  public async signUp(user: User): Promise<void> {
    await this.firebaseAuth.createUserWithEmailAndPassword(user.email, user.pwd);
    await this.addUser(user);
  }

  public async signOut(): Promise<void> {
    await this.firebaseAuth.signOut();
  }

  public async addUser(user: User): Promise<boolean> {
    let data = null;
    data = this.findFirstByEmail(user.email, this.userPath).subscribe(
      res => data = res,
      err => console.log('error => ', err)
    );
    console.log(data);
    if (data == null) {
      this.userRef.add({ ...user });
      console.log(`user added: ${user}`);
      return true;
    } else {
      return false;
    }

  }

  public findFirstByEmail(email: string, path: string): Observable<any> {
    return this.afs.collection(`${path}`, ref => ref.where('email', '==', `${email}`)).snapshotChanges().pipe(
      first(),
      map(snapshot => {
        return snapshot.map(a => {
          const data = a.payload.doc.data;
          return data;
        })
      })
    );
  }

  public getAllUser(): AngularFirestoreCollection<User> {
    return this.userRef;
  }


  public async addStudent(student: Student): Promise<boolean> {
    let data = null;
    this.findFirstByEmail(student.email, this.studentPath).subscribe(
      res => data = res,
      err => console.log('error => ', err)
    );

    if (data == null) {
      this.studentRef.add({ ...student });
      return true;
    } else {
      return false;
    }

  }

  public getAllStudent(): AngularFirestoreCollection<User> {
    return this.userRef;
  }

  public async addInstitution(institution: Institution): Promise<boolean> {
    let data = null;
    this.findFirstByEmail(institution.email, this.institutionPath).subscribe(
      res => data = res,
      err => console.log('error => ', err)
    );

    if (data == null) {
      this.institutionRef.add({ ...institution });
      return true;
    } else {
      return false;
    }

  }

  public getAllInstitution(): AngularFirestoreCollection<Institution> {
    return this.institutionRef;
  }


}

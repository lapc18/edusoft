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
import { InstitutionBoard } from '../models/institution-board';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private userPath: string = 'users';
  private studentPath: string = 'students';
  private institutionPath: string = 'institutions';
  private institutionBoardPath: string = 'institutions-board';

  private userRef: AngularFirestoreCollection<User> = null;
  private studentRef: AngularFirestoreCollection<Student> = null;
  private institutionRef: AngularFirestoreCollection<Institution> = null;
  private institutionBoardRef: AngularFirestoreCollection<InstitutionBoard> = null;


  private user$: Observable<User>;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {

    this.userRef = afs.collection(this.userPath);
    this.studentRef = afs.collection(this.studentPath);
    this.institutionRef = afs.collection(this.institutionPath);

    // this.user$ = this.firebaseAuth.authState.pipe(
    //   switchMap(user => {
    //     if (user)
    //       return this.afs.doc<User>(`${this.userPath}/${user.uid}`).valueChanges();
    //     else
    //       return of(null);
    //   })
    // );

  }


  public async signIn(user: string, pwd: string): Promise<void> {
    await this.firebaseAuth.signInWithEmailAndPassword(user, pwd);
  }

  public async signUp(user: User): Promise<void> {
    await this.firebaseAuth.createUserWithEmailAndPassword(user.email, user.pwd);
  }

  public async signOut(): Promise<void> {
    await this.firebaseAuth.signOut();
  }

  public findByEmail(email: string, path: string): Observable<any> {
    return this.afs.collection(`${path}`, ref => ref.where('email', '==', `${email}`)).valueChanges().pipe(
      map(snapshot => {
        return snapshot.map(data => data);
      })
    );
  }

  public async addUser(user: User): Promise<any> {
    let data = false;
    return this.findByEmail(user.email, this.userPath).subscribe(
      res => {
        data = res.length > 0 ? true : false;
        if (data == false) {
          this.userRef.add({ ...user });
          console.log(`user added => ${user.email}`);
          return true;
        } else {
          console.log(`user not added because exits=> ${user.email}`);
          return false;
        }
      },
      err => console.log('error => ', err)
    );

  }

  public getAllUser(): AngularFirestoreCollection<User> {
    return this.userRef;
  }

  public async addStudent(student: Student): Promise<any> {
    let data = false;
    return this.findByEmail(student.email, this.studentPath).subscribe(
      res => {
        data = res.length > 0 ? true : false;
        if (data == false) {
          this.studentRef.add({ ...student });
          console.log(`student added => ${student.email}`);
          return true;
        } else {
          console.log(`student not added because exits=> ${student.email}`);
          return false;
        }
      },
      err => console.log('error => ', err)
    );

  }

  public getAllStudent(): AngularFirestoreCollection<User> {
    return this.userRef;
  }

  public async addInstitution(institution: Institution): Promise<any> {
    let data = false;
    return this.findByEmail(institution.email, this.institutionPath).subscribe(
      res => {
        data = res.length > 0 ? true : false;
        if (data == false) {
          this.institutionRef.add({ ...institution });
          console.log(`institution added => ${institution.email}`);
          return true;
        } else {
          console.log(`institution not added because exits=> ${institution.email}`);
          return false;
        }
      },
      err => console.log('error => ', err)
    );

  }

  public getAllInstitution(): AngularFirestoreCollection<Institution> {
    return this.institutionRef;
  }

  public async addInstitutionBoard(institution: InstitutionBoard): Promise<any> {
    let data: boolean = false;
    return this.findByEmail(institution.email, this.institutionBoardPath).subscribe(
      res => {
        data = res.length > 0 ? true : false;
        if (!data) {
          this.institutionBoardRef.add({ ...institution });
          console.log(`institution board added => ${institution.email}`);
          return true;
        } else {
          console.log(`institution not added because exits=> ${institution.email}`);
          return false;
        }
      },
      err => console.log('error => ', err)
    );

  }

  public getAllInstitutionBoards(): AngularFirestoreCollection<InstitutionBoard> {
    return this.institutionBoardRef;
  }

}

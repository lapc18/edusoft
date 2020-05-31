import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { InstitutionUser } from 'src/app/shared/models/institution-user';
import { Institution } from 'src/app/shared/models/institution';
import { User } from '../../shared/models/user';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { CustomModalComponent } from 'src/app/components/custom-modal/custom-modal.component';
import { Router } from '@angular/router';
import { MailService } from 'src/app/shared/services/mail.service';
import { Mail } from 'src/app/shared/models/mail';


@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {


  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  private institutionUser: InstitutionUser;
  private institution: Institution;
  private user: User;
  private mail: Mail;


  constructor(
    private _formBuilder: FormBuilder,
    private _firebase: FirebaseService,
    public dialog: MatDialog,
    private router: Router,
    private _mailer: MailService
  ) {

    this.firstFormGroup = this._formBuilder.group({
      document: ['', [Validators.required, Validators.minLength(11)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDay: [''],
      birthPlace: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      director: ['', Validators.required],
      address: ['', Validators.required],
      studentsCount: [''],
      areasCount: [''],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(8)]],
      phone: ['', Validators.required],
    });
  }

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }

  public async enroll(): Promise<void> {
    this.mapForms();
    this.openDialog();
    await this._firebase.addInstitution(this.institution);
    await this._firebase.addUser(this.user);
    await this._firebase.signUp(this.user);
    this._mailer.send(this.mail).subscribe(
      res => console.log(`mailer to ${this.mail.name} response: ${JSON.stringify(res)}`),
      err => console.log(`mailer to ${this.mail.name} error response: ${err}`),
    );
  }

  private mapForms(): void {
    this.institutionUser = {
      document: this.firstFormGroup.value.document,
      firstName: this.firstFormGroup.value.firstName,
      lastName: this.firstFormGroup.value.lastName,
      birthDay: this.firstFormGroup.value.birthDay,
      birthPlace: this.firstFormGroup.value.birthPlace,
      email: this.firstFormGroup.value.email,
      phone: this.firstFormGroup.value.phone,
    };

    this.institution = {
      regUser: this.institutionUser,
      name: this.secondFormGroup.value.name,
      director: this.secondFormGroup.value.director,
      address: this.secondFormGroup.value.address,
      studentsCount: this.secondFormGroup.value.studentsCount,
      areasCount: this.secondFormGroup.value.areasCount,
      email: this.secondFormGroup.value.email,
      phone: this.secondFormGroup.value.phone,
    };

    this.user = {
      email: this.institution.email,
      pwd: this.secondFormGroup.get('pwd').value,
      displayName: this.institution.name
    };

    this.mail = {
      email: this.institution.email,
      name: this.institution.name,
      subject: 'Edusoft: Bienvenido a nuestra plataforma',
      body: 'Sea bienvenido a EduSoft, la plataforma que va a evolucionar la educación con el buen uso de la tecnología. \n Es todo un placer tanto para EduSoft como para DevLegnd. En ese mismo orden, cabe destacar que su usuario ha sido creado \n con éxito y nuestro equipo está trabajando para habilitar su dashboard de manera exclusiva, de la cual va a recibir un link \n de acceso más adelante, donde tendrá acceso a la plataforma y podrá iniciar su jornada de trabajo inteligente y digital.\n \n  Si tienen alguna duda, no dude en visitar nuestro Website https://devlegnd.com y contactarnos por esa via o la más deseada de \n las que tenemos disponibles en nuestro site.\n',
    };

    console.log(this.institutionUser.email);

  }

  public openDialog(): void {
    let dialogRef = this.dialog.open(CustomModalComponent, {
      width: '70vw',
      data: {
        content: `¡Felicitaciones! <br> Has completado todos los campos de manera exitosa. Si te encuentras en
      este
      punto es porque ya has leído y aceptado nuestros <a href="#" target="_blank">Términos y Condiciones</a>
      de uso. De ser así, en seguida estaremos contactando contigo y tu
      institución.`, title: 'EduSoft', subtitle: 'La educación en su mejor versión'
      }
    });
    dialogRef.afterClosed().subscribe
      (
        result => {
          console.log(result);
          console.clear();
          this.router.navigate(['/home']);
        }
      );
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {


  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.firstFormGroup = this._formBuilder.group({
      document: ['', Validators.required, Validators.minLength(11)],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDay: [''],
      birthPlace: [''],
      email: ['', Validators.required, Validators.email],
      phone: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      director: ['', Validators.required],
      address: ['', Validators.required],
      studentsCount: [''],
      areasCount: [''],
      email: ['', Validators.required, Validators.email],
      phone: ['', Validators.required],
    });
  }

}

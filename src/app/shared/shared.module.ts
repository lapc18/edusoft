import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../views/home/home.component';
import { EnrollmentComponent } from '../views/enrollment/enrollment.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomModalComponent } from '.././components/custom-modal/custom-modal.component';



@NgModule({
  declarations: [
    HomeComponent,
    EnrollmentComponent,
    FooterComponent,
    NavbarComponent,
    CustomModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HomeComponent,
    EnrollmentComponent,
    FooterComponent,
    NavbarComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CustomModalComponent
  ]
})
export class SharedModule { }

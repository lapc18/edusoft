import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../views/home/home.component';
import { EnrollmentComponent } from '../views/enrollment/enrollment.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomModalComponent } from '.././components/custom-modal/custom-modal.component';
import { JoinComponent } from '../views/join/join.component';
import { JoinCardComponent } from '../components/join-card/join-card.component';
import { ModalFormComponent } from '../components/modal-form/modal-form.component';
import { PrimeNgModule } from '../primeng.module';
import { ActionMenuComponent } from '../components/action-menu/action-menu.component';



@NgModule({
  declarations: [
    HomeComponent,
    EnrollmentComponent,
    FooterComponent,
    NavbarComponent,
    CustomModalComponent,
    JoinComponent,
    JoinCardComponent,
    ModalFormComponent,
    ActionMenuComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule
  ],
  exports: [
    HomeComponent,
    EnrollmentComponent,
    FooterComponent,
    NavbarComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CustomModalComponent,
    JoinComponent,
    ModalFormComponent,
    PrimeNgModule,
    ActionMenuComponent
  ]
})
export class SharedModule { }

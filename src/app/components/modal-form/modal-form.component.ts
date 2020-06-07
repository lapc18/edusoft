import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  constructor() { }

  @Input() title: string = 'EduSoft';
  @Input('form-group') formGroup: FormGroup;


  ngOnInit(): void {
  }

}

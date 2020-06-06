import { Component, OnInit } from '@angular/core';
import { InstitutionBoard } from 'src/app/shared/models/institution-board';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {



  public institutions: InstitutionBoard[];

  constructor(
    private _firebase: FirebaseService
  ) { }

  ngOnInit(): void {
  }

}

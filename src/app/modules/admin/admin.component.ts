import { Component, OnInit } from '@angular/core';
import { InstitutionBoard } from 'src/app/shared/models/institution-board';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];;
  dataSource: InstitutionBoard[];


  constructor() {
    this.dataSource = [
      // {
      //   id: 0,
      //   email: 'sgasg@mail.com',
      //   name: 'tu depopola2r 3000',
      //   url: 'jacunofacundo.com',
      //   description: 'el jacuno de tu mujel',
      //   areasCount: '5',
      //   isActive: false
      // },
    ];

    console.log(this.dataSource.length);

  }

  ngOnInit(): void {
  }

}
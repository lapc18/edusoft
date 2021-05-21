import { Component, OnInit } from '@angular/core';
import { InstitutionBoard } from 'src/app/shared/models/institution-board';
import { Columns } from 'src/app/shared/models/columns';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: Columns[] = adminCols;
  dataSource: InstitutionBoard[];
  menuItems: MenuItem[] = [
    { label: 'New', icon: 'pi pi-fw pi-plus', },
    { label: 'Open', icon: 'pi pi-fw pi-download' },
    { label: 'Undo', icon: 'pi pi-fw pi-refresh' }
  ];;


  constructor(
    private fbs: FirebaseService
  ) {
    this.dataSource = [
      {
        id: 0,
        email: 'sgasg@mail.com',
        name: 'tu depopola2r 3000',
        url: 'jacunofacundo.com',
        description: 'el jacuno de tu mujel',
        status: false
      },
      {
        id: 0,
        email: 'sgasg@mail.com',
        name: 'tu depopola2r 3000',
        url: 'jacunofacundo.com',
        description: 'el jacuno de tu mujel',
        status: false
      },
    ];
  }

  ngOnInit(): void {
    this.fbs.getAllInstitutionBoards()?.valueChanges().subscribe(
      res => {
        // this.dataSource = res;
        console.log('res => ', res);
      },
      err => console.log('err => ', err),

    );

    for (var i: number = 0; i <= 500; i++) {
      console.log(`lo que me de mi gana => ${i}`);
    }

  }

  getStatusColor(status: boolean): string {
    if (status)
      return 'green';
    else
      return 'yellow';
  }

}

export const adminCols: Columns[] = [
  new Columns('Id', 'id', 50),
  new Columns('Institution Name', 'name', 100, false, true),
  new Columns('Description', 'description', 150, false),
  new Columns('Email', 'email', 100),
  new Columns('Estatus', 'status', 50, false, false, true),
  new Columns('Actions', 'actions', 50, true),
];
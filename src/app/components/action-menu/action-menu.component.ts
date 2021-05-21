import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'action-menu',
  template: `
    <div class="action-menu-container">
      <p-menu style="item" #menu [popup]="true" [model]="items"></p-menu>
      <button  type="button" pButton icon="pi pi-list" (click)="menu.toggle($event)"></button>
    </div>
  `,
  styleUrls: ['action-menu.component.scss']
})
export class ActionMenuComponent implements OnInit {


  @Input() items: MenuItem[];
  @Output() onEnable: EventEmitter<any> = new EventEmitter();
  @Output() onDisable: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }



}

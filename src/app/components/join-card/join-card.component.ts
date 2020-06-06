import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'join-card',
  templateUrl: './join-card.component.html',
  styleUrls: ['./join-card.component.css']
})
export class JoinCardComponent implements OnInit {


  @Input() url: string;
  @Input() title: string;
  @Input() content: string;
  @Input() footer: string;

  constructor() { }

  ngOnInit(): void {
  }

}

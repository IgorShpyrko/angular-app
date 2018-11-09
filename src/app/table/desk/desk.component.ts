import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.css']
})
export class DeskComponent implements OnInit {

  @Input() users;
  constructor() { }
  
  ngOnInit() {
  }

}

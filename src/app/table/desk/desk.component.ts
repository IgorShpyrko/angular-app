import { Component, OnInit, Input, Output } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.css']
})
export class DeskComponent implements OnInit {
  @Input() users;

  myValue: string = '';
  from: string = 'usd';
  to: string = 'usd';

  constructor() { }
  
  ngOnInit() {
  
  }

  onSelectFrom(e) {
    this.from = e.target.value
  }

  onSelectTo(e) {
    this.to = e.target.value
  }

  onChangeValue(e) {
    if(e.data == '') {
      console.log(e.data)
      return
    } else {
      console.log('else')
      this.myValue = e.target.value
    }
    
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private _userService: UserService) { }
  public users;

  ngOnInit() {
    this._userService.getAll()
      .subscribe(users => {
        this.users = users
      })
  }

}

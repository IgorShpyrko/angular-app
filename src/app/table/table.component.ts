import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { GetRatesService } from '../services/get-rates.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(
    private _userService: UserService,
    private _getService: GetRatesService) { }
  
  public users;
  public rates;

  ngOnInit() {
    this._userService.getAll()
      .subscribe(users => {
        this.users = users
      })
    this._getService.getRates()
      .subscribe(data => {
        this.rates = data['rates']
        console.log(this.rates)
      })
  }
}

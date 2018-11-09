import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetRatesService {

  constructor(private _http: HttpClient) { }
  getRates() {
    return this._http.get('https://my-json-server.typicode.com/IgorShpyrko/demo/db')
  }
}

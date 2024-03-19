import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private serviceUrl_Countries: string;
  private http = inject(HttpClient);

  constructor() {
    // /globals/countries
    this.serviceUrl_Countries =
      'https://restcountries.com/v3.1/all?fields=name,flags';
  }

  //countries
  public getCountries(): Observable<any> {
    return this.http.get(this.serviceUrl_Countries);
  }
}

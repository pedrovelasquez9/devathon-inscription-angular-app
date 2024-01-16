import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.development';
import { Observable } from 'rxjs';

const APIEndpoint: string = environment.APIEndpoint;
const APIVersion: string = environment.APIVersion;

const APIResourceSeniority: string = '/seniority';

@Injectable({
  providedIn: 'root',
})
export class SeniorityService {
  private serviceUrl_SeniorityService: string;

  constructor(private http: HttpClient) {
    // /system/gateway
    this.serviceUrl_SeniorityService =
      APIEndpoint + APIVersion + APIResourceSeniority;
  }

  public getSeniorityList(): Observable<any> {
    return this.http.get(`${this.serviceUrl_SeniorityService}/all`);
  }
}

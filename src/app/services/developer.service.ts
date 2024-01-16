import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.development';
import { Observable } from 'rxjs';

const APIEndpoint: string = environment.APIEndpoint;
const APIVersion: string = environment.APIVersion;

const APIResourceDeveloper: string = '/developer';

@Injectable({
  providedIn: 'root',
})
export class DeveloperService {
  private serviceUrl_DeveloperService: string;

  constructor(private http: HttpClient) {
    // /system/gateway
    this.serviceUrl_DeveloperService =
      APIEndpoint + APIVersion + APIResourceDeveloper;
  }

  public getDeveloperList(): Observable<any> {
    return this.http.get(`${this.serviceUrl_DeveloperService}/all`);
  }
}

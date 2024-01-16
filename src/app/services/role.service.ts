import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.development';
import { Observable } from 'rxjs';

const APIEndpoint: string = environment.APIEndpoint;
const APIVersion: string = environment.APIVersion;

const APIResourceRoles: string = '/roles';
@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private serviceUrl_RoleService: string;

  constructor(private http: HttpClient) {
    // /system/gateway
    this.serviceUrl_RoleService = APIEndpoint + APIVersion + APIResourceRoles;
  }

  public getRolesList(): Observable<any> {
    return this.http.get(`${this.serviceUrl_RoleService}/all`);
  }
}

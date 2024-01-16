import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.development';
import { Observable } from 'rxjs';

const APIEndpoint: string = environment.APIEndpoint;
const APIVersion: string = environment.APIVersion;

const APIResourceTeam: string = '/team';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private serviceUrl_TeamService: string;

  constructor(private http: HttpClient) {
    // /system/gateway
    this.serviceUrl_TeamService = APIEndpoint + APIVersion + APIResourceTeam;
  }

  public getTeamList(): Observable<any> {
    return this.http.get(`${this.serviceUrl_TeamService}/all`);
  }
}

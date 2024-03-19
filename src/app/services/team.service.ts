import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.development';
import { Observable, of } from 'rxjs';

const APIEndpoint: string = environment.APIEndpoint;
const APIVersion: string = environment.APIVersion;

const APIResourceTeam: string = '/team';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private serviceUrl_TeamService: string;

  constructor(private http: HttpClient) {
    this.serviceUrl_TeamService = APIEndpoint + APIVersion + APIResourceTeam;
  }

  public getTeamList(): Observable<any[]> {
    // return this.http.get(`${this.serviceUrl_TeamService}/all`);
    // Mocked data
    const data = [
      {
        id: 1,
        name: 'Team 1',
        maxBackend: 2,
        maxFrontend: 2,
        frontendParticipants: [
          { id: 1, name: 'User 1-front' },
          { id: 2, name: 'User 2-front' },
        ],
        backendParticipants: [
          { id: 3, name: 'User 3' },
          { id: 4, name: 'User 4' },
        ],
        technologies: [
          { id: 1, name: 'nextjs' },
          { id: 2, name: 'express' },
        ],
      },
      {
        id: 2,
        name: 'Team 2',
        maxBackend: 3,
        maxFrontend: 3,
        frontendParticipants: [
          { id: 1, name: 'User 1-front' },
          { id: 2, name: 'User 2-front' },
        ],
        backendParticipants: [
          { id: 3, name: 'User 3-back' },
          { id: 4, name: 'User 4-back' },
        ],
        technologies: [
          { id: 1, name: 'reactjs' },
          { id: 2, name: 'java' },
        ],
      },
      {
        id: 3,
        name: 'Team 3',
        maxBackend: 3,
        maxFrontend: 3,
        frontendParticipants: [
          { id: 1, name: 'User 1-front' },
          { id: 2, name: 'User 2-front' },
        ],
        backendParticipants: [
          { id: 3, name: 'User 3-back' },
          { id: 4, name: 'User 4-back' },
        ],
        technologies: [
          { id: 1, name: 'angular' },
          { id: 2, name: 'csharp' },
        ],
      },
      {
        id: 4,
        name: 'Team 4',
        frontendParticipants: [],
        backendParticipants: [],
        maxBackend: 3,
        maxFrontend: 3,
        technologies: [
          { id: 1, name: 'angular' },
          { id: 2, name: 'nestjs' },
          { id: 1, name: 'express' },
          { id: 2, name: 'csharp' },
          { id: 1, name: 'java' },
          { id: 2, name: 'reactjs' },
          { id: 1, name: 'nextjs' },
          { id: 2, name: 'nestjs' },
        ],
      },
    ];

    // Simulating the observer response
    const observerResponse$ = of(data);

    return observerResponse$;
  }
}

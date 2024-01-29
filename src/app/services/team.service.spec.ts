import { TestBed } from '@angular/core/testing';

import { TeamService } from './team.service';
import { Observable } from 'rxjs';

describe('TeamService', () => {
  let service: TeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an observable of an array of team objects', () => {
    const result = service.getTeamList();
    expect(result).toBeInstanceOf(Observable);
    result.subscribe(data => {
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(0);
      expect(data[0]).toHaveProperty('id');
      expect(data[0]).toHaveProperty('name');
      expect(data[0]).toHaveProperty('maxBackend');
      expect(data[0]).toHaveProperty('maxFrontend');
      expect(data[0]).toHaveProperty('frontendParticipants');
      expect(data[0]).toHaveProperty('backendParticipants');
      expect(data[0]).toHaveProperty('tecnologies');
    });
  });
});

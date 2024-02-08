import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CountryService } from './country.service';

describe('CountryService', () => {
  let service: CountryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountryService],
    });
    service = TestBed.inject(CountryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve countries', () => {
    const mockResponse = [
      { name: 'Country1', flags: [] },
      { name: 'Country2', flags: [] },
    ];

    service.getCountries().subscribe(countries => {
      expect(countries).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(service['serviceUrl_Countries']);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});

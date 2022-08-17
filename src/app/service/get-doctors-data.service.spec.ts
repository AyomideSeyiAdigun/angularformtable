import { TestBed } from '@angular/core/testing';

import { GetDoctorsDataService } from './get-doctors-data.service';

describe('GetDoctorsDataService', () => {
  let service: GetDoctorsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDoctorsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

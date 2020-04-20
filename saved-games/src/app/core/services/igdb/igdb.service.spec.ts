import { TestBed } from '@angular/core/testing';

import { IgdbService } from './igdb.service';

describe('IgdbService', () => {
  let service: IgdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IgdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

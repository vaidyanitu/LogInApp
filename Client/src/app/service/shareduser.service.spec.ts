import { TestBed, inject } from '@angular/core/testing';

import { ShareduserService } from './shareduser.service';

describe('ShareduserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareduserService]
    });
  });

  it('should be created', inject([ShareduserService], (service: ShareduserService) => {
    expect(service).toBeTruthy();
  }));
});

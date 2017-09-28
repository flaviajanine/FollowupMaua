import { TestBed, inject } from '@angular/core/testing';

import { AuthProfService } from './auth-prof.service';

describe('AuthProfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthProfService]
    });
  });

  it('should be created', inject([AuthProfService], (service: AuthProfService) => {
    expect(service).toBeTruthy();
  }));
});

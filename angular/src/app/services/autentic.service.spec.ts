import { TestBed, inject } from '@angular/core/testing';

import { AutenticService } from './autentic.service';

describe('AutenticService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticService]
    });
  });

  it('should be created', inject([AutenticService], (service: AutenticService) => {
    expect(service).toBeTruthy();
  }));
});

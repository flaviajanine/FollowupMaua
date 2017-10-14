import { TestBed, inject } from '@angular/core/testing';

import { ProfsService } from './profs.service';

describe('ProfsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfsService]
    });
  });

  it('should be created', inject([ProfsService], (service: ProfsService) => {
    expect(service).toBeTruthy();
  }));
});

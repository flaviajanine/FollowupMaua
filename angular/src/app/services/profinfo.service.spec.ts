import { TestBed, inject } from '@angular/core/testing';

import { ProfinfoService } from './profinfo.service';

describe('ProfinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfinfoService]
    });
  });

  it('should be created', inject([ProfinfoService], (service: ProfinfoService) => {
    expect(service).toBeTruthy();
  }));
});

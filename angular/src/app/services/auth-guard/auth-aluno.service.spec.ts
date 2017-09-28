import { TestBed, inject } from '@angular/core/testing';

import { AuthAlunoService } from './auth-aluno.service';

describe('AuthAlunoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthAlunoService]
    });
  });

  it('should be created', inject([AuthAlunoService], (service: AuthAlunoService) => {
    expect(service).toBeTruthy();
  }));
});

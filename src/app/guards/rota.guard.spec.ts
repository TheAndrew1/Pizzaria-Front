import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { rotaGuard } from './rota.guard';

describe('rotaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => rotaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

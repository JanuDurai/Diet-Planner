import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminAcessGuard } from './admin-acess.guard';

describe('adminAcessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => adminAcessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

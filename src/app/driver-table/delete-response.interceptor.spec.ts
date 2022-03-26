import { TestBed } from '@angular/core/testing';

import { DeleteResponseInterceptor } from './delete-response.interceptor';

describe('DeleteResponseInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DeleteResponseInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DeleteResponseInterceptor = TestBed.inject(DeleteResponseInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

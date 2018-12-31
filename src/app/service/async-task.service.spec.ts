import { TestBed } from '@angular/core/testing';

import { AsyncTaskService } from './async-task.service';

describe('AsyncTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsyncTaskService = TestBed.get(AsyncTaskService);
    expect(service).toBeTruthy();
  });
});

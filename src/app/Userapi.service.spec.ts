import { TestBed } from '@angular/core/testing';

import { UserApiService } from './Userapi.service';

describe('UserApiService', () => {
  let service: UserApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
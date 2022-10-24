import { TestBed } from '@angular/core/testing';

import { PostimgService } from './postimg.service';

describe('PostimgService', () => {
  let service: PostimgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostimgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

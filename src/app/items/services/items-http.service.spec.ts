import { TestBed } from '@angular/core/testing';

import { ItemsHttpService } from './items-http.service';

describe('ItemsHttpService', () => {
  let service: ItemsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

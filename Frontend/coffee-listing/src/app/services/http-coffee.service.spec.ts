import { TestBed } from '@angular/core/testing';

import { ListCoffeeService } from './http-coffee.service';

describe('ListCoffeeService', () => {
  let service: ListCoffeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCoffeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ListArticlesService } from './list-articles.service';

describe('ListArticlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListArticlesService = TestBed.get(ListArticlesService);
    expect(service).toBeTruthy();
  });
});

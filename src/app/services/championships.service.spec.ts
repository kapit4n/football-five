import { TestBed } from '@angular/core/testing';

import { ChampionshipsService } from './championships.service';

describe('ChampionshipsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChampionshipsService = TestBed.get(ChampionshipsService);
    expect(service).toBeTruthy();
  });
});

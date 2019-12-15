import { TestBed } from '@angular/core/testing';

import { MapaAtualService } from './mapa-atual.service';

describe('MapaAtualService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapaAtualService = TestBed.get(MapaAtualService);
    expect(service).toBeTruthy();
  });
});

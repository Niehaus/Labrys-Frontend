import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaAtualComponent } from './mapa-atual.component';

describe('MapaAtualComponent', () => {
  let component: MapaAtualComponent;
  let fixture: ComponentFixture<MapaAtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaAtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaAtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoioComponent } from './apoio.component';

describe('ApoioComponent', () => {
  let component: ApoioComponent;
  let fixture: ComponentFixture<ApoioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

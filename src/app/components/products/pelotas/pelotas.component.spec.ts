import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelotasComponent } from './pelotas.component';

describe('PelotasComponent', () => {
  let component: PelotasComponent;
  let fixture: ComponentFixture<PelotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

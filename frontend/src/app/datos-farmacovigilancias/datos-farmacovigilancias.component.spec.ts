import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosFarmacovigilanciasComponent } from './datos-farmacovigilancias.component';

describe('DatosFarmacovigilanciasComponent', () => {
  let component: DatosFarmacovigilanciasComponent;
  let fixture: ComponentFixture<DatosFarmacovigilanciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosFarmacovigilanciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosFarmacovigilanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

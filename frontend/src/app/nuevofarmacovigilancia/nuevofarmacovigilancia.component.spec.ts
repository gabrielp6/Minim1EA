import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevofarmacovigilanciaComponent } from './nuevofarmacovigilancia.component';

describe('NuevofarmacovigilanciaComponent', () => {
  let component: NuevofarmacovigilanciaComponent;
  let fixture: ComponentFixture<NuevofarmacovigilanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevofarmacovigilanciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevofarmacovigilanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

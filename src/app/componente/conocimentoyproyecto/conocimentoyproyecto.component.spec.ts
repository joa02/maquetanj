import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocimentoyproyectoComponent } from './conocimentoyproyecto.component';

describe('ConocimentoyproyectoComponent', () => {
  let component: ConocimentoyproyectoComponent;
  let fixture: ComponentFixture<ConocimentoyproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConocimentoyproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConocimentoyproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

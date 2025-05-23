import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarEstudiantePage } from './agregar-estudiante.page';

describe('AgregarEstudiantePage', () => {
  let component: AgregarEstudiantePage;
  let fixture: ComponentFixture<AgregarEstudiantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

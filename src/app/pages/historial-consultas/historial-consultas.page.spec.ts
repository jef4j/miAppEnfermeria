import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialConsultasPage } from './historial-consultas.page';

describe('HistorialConsultasPage', () => {
  let component: HistorialConsultasPage;
  let fixture: ComponentFixture<HistorialConsultasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialConsultasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

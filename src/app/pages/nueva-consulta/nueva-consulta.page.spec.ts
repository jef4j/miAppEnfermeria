import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaConsultaPage } from './nueva-consulta.page';

describe('NuevaConsultaPage', () => {
  let component: NuevaConsultaPage;
  let fixture: ComponentFixture<NuevaConsultaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

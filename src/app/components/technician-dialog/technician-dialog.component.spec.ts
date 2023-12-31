import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianDialogComponent } from './technician-dialog.component';

describe('TechnicianDialogComponent', () => {
  let component: TechnicianDialogComponent;
  let fixture: ComponentFixture<TechnicianDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicianDialogComponent]
    });
    fixture = TestBed.createComponent(TechnicianDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

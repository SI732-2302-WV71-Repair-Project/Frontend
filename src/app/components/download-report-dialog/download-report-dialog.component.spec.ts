import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadReportDialogComponent } from './download-report-dialog.component';

describe('DownloadReportDialogComponent', () => {
  let component: DownloadReportDialogComponent;
  let fixture: ComponentFixture<DownloadReportDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadReportDialogComponent]
    });
    fixture = TestBed.createComponent(DownloadReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

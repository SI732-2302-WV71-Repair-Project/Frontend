import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatClientTechnicianComponent } from './chat-client-technician.component';

describe('ChatClientTechnicianComponent', () => {
  let component: ChatClientTechnicianComponent;
  let fixture: ComponentFixture<ChatClientTechnicianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatClientTechnicianComponent]
    });
    fixture = TestBed.createComponent(ChatClientTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

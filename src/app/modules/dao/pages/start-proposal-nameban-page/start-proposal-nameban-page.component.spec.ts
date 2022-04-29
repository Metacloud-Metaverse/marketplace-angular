import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartProposalNamebanPageComponent } from './start-proposal-nameban-page.component';

describe('StartProposalNamebanPageComponent', () => {
  let component: StartProposalNamebanPageComponent;
  let fixture: ComponentFixture<StartProposalNamebanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartProposalNamebanPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartProposalNamebanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

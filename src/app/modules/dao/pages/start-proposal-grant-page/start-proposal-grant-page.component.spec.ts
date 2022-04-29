import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartProposalGrantPageComponent } from './start-proposal-grant-page.component';

describe('StartProposalGrantPageComponent', () => {
  let component: StartProposalGrantPageComponent;
  let fixture: ComponentFixture<StartProposalGrantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartProposalGrantPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartProposalGrantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

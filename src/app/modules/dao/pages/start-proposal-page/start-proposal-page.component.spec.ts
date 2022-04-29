import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartProposalPageComponent } from './start-proposal-page.component';

describe('StartProposalPageComponent', () => {
  let component: StartProposalPageComponent;
  let fixture: ComponentFixture<StartProposalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartProposalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartProposalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

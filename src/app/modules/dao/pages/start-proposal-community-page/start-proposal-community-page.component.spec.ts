import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartProposalCommunityPageComponent } from './start-proposal-community-page.component';

describe('StartProposalCommunityPageComponent', () => {
  let component: StartProposalCommunityPageComponent;
  let fixture: ComponentFixture<StartProposalCommunityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartProposalCommunityPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartProposalCommunityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

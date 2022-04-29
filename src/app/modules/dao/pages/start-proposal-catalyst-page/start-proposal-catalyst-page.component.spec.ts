import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartProposalCatalystPageComponent } from './start-proposal-catalyst-page.component';

describe('StartProposalCatalystPageComponent', () => {
  let component: StartProposalCatalystPageComponent;
  let fixture: ComponentFixture<StartProposalCatalystPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartProposalCatalystPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartProposalCatalystPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

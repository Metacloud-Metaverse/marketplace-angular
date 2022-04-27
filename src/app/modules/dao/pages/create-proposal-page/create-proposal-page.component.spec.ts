import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProposalPageComponent } from './create-proposal-page.component';

describe('CreateProposalPageComponent', () => {
  let component: CreateProposalPageComponent;
  let fixture: ComponentFixture<CreateProposalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProposalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProposalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

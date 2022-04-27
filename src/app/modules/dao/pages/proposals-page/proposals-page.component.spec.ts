import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalsPageComponent } from './proposals-page.component';

describe('ProposalsPageComponent', () => {
  let component: ProposalsPageComponent;
  let fixture: ComponentFixture<ProposalsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

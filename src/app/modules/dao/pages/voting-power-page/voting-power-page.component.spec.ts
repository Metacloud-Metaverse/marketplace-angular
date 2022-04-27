import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingPowerPageComponent } from './voting-power-page.component';

describe('VotingPowerPageComponent', () => {
  let component: VotingPowerPageComponent;
  let fixture: ComponentFixture<VotingPowerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingPowerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingPowerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

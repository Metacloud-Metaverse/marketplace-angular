import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesModalComponent } from './votes-modal.component';

describe('VotesModalComponent', () => {
  let component: VotesModalComponent;
  let fixture: ComponentFixture<VotesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

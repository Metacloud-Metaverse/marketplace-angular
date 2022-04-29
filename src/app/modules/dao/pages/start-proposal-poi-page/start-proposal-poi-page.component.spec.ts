import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartProposalPoiPageComponent } from './start-proposal-poi-page.component';

describe('StartProposalPoiPageComponent', () => {
  let component: StartProposalPoiPageComponent;
  let fixture: ComponentFixture<StartProposalPoiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartProposalPoiPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartProposalPoiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

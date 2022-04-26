import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WearablesPageComponent } from './wearables-page.component';

describe('WearablesPageComponent', () => {
  let component: WearablesPageComponent;
  let fixture: ComponentFixture<WearablesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WearablesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WearablesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

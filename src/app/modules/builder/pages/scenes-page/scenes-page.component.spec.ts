import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesPageComponent } from './scenes-page.component';

describe('ScenesPageComponent', () => {
  let component: ScenesPageComponent;
  let fixture: ComponentFixture<ScenesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

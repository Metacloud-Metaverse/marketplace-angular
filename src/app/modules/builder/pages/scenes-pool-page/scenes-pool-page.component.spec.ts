import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesPoolPageComponent } from './scenes-pool-page.component';

describe('ScenesPoolPageComponent', () => {
  let component: ScenesPoolPageComponent;
  let fixture: ComponentFixture<ScenesPoolPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenesPoolPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesPoolPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

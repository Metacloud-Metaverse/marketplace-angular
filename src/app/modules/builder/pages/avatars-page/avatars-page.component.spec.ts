import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarsPageComponent } from './avatars-page.component';

describe('AvatarsPageComponent', () => {
  let component: AvatarsPageComponent;
  let fixture: ComponentFixture<AvatarsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

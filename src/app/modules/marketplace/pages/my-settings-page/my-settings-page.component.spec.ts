import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySettingsPageComponent } from './my-settings-page.component';

describe('MySettingsPageComponent', () => {
  let component: MySettingsPageComponent;
  let fixture: ComponentFixture<MySettingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySettingsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

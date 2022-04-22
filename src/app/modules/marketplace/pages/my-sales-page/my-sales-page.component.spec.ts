import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySalesPageComponent } from './my-sales-page.component';

describe('MySalesPageComponent', () => {
  let component: MySalesPageComponent;
  let fixture: ComponentFixture<MySalesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySalesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySalesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

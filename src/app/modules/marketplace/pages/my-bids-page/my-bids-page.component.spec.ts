import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBidsPageComponent } from './my-bids-page.component';

describe('MyBidsPageComponent', () => {
  let component: MyBidsPageComponent;
  let fixture: ComponentFixture<MyBidsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBidsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBidsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

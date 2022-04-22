import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOnsalePageComponent } from './my-onsale-page.component';

describe('MyOnsalePageComponent', () => {
  let component: MyOnsalePageComponent;
  let fixture: ComponentFixture<MyOnsalePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOnsalePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOnsalePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

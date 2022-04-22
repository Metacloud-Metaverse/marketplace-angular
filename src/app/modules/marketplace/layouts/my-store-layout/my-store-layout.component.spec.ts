import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStoreLayoutComponent } from './my-store-layout.component';

describe('MyStoreLayoutComponent', () => {
  let component: MyStoreLayoutComponent;
  let fixture: ComponentFixture<MyStoreLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyStoreLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStoreLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

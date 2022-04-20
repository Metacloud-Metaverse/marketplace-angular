import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsActionShareElementComponent } from './buttons-action-share-element.component';

describe('ButtonsActionShareElementComponent', () => {
  let component: ButtonsActionShareElementComponent;
  let fixture: ComponentFixture<ButtonsActionShareElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsActionShareElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsActionShareElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

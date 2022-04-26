import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSceneModalComponent } from './delete-scene-modal.component';

describe('DeleteSceneModalComponent', () => {
  let component: DeleteSceneModalComponent;
  let fixture: ComponentFixture<DeleteSceneModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSceneModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSceneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

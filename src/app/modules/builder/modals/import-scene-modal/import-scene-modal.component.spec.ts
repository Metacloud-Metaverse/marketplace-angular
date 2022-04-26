import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportSceneModalComponent } from './import-scene-modal.component';

describe('ImportSceneModalComponent', () => {
  let component: ImportSceneModalComponent;
  let fixture: ComponentFixture<ImportSceneModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportSceneModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportSceneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneDetailPageComponent } from './scene-detail-page.component';

describe('SceneDetailPageComponent', () => {
  let component: SceneDetailPageComponent;
  let fixture: ComponentFixture<SceneDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SceneDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

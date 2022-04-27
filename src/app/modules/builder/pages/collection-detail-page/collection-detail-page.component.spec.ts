import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionDetailPageComponent } from './collection-detail-page.component';

describe('CollectionDetailPageComponent', () => {
  let component: CollectionDetailPageComponent;
  let fixture: ComponentFixture<CollectionDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

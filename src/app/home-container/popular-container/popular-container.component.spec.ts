import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularContainerComponent } from './popular-container.component';

describe('PopularContainerComponent', () => {
  let component: PopularContainerComponent;
  let fixture: ComponentFixture<PopularContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularContainerComponent]
    });
    fixture = TestBed.createComponent(PopularContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

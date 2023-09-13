import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentContainerComponent } from './recent-container.component';

describe('RecentContainerComponent', () => {
  let component: RecentContainerComponent;
  let fixture: ComponentFixture<RecentContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentContainerComponent]
    });
    fixture = TestBed.createComponent(RecentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

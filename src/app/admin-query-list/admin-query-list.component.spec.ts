import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQueryListComponent } from './admin-query-list.component';

describe('AdminQueryListComponent', () => {
  let component: AdminQueryListComponent;
  let fixture: ComponentFixture<AdminQueryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminQueryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQueryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

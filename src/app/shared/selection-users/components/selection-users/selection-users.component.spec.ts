import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionUsersComponent } from './selection-users.component';

describe('SelectionUsersComponent', () => {
  let component: SelectionUsersComponent;
  let fixture: ComponentFixture<SelectionUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

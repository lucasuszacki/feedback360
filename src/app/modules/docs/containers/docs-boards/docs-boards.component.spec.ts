import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsBoardsComponent } from './docs-boards.component';

describe('DocsBoardsComponent', () => {
  let component: DocsBoardsComponent;
  let fixture: ComponentFixture<DocsBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsBoardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

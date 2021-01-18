import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCrudComponent } from './new-crud.component';

describe('NewCrudComponent', () => {
  let component: NewCrudComponent;
  let fixture: ComponentFixture<NewCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTitreComponent } from './list-titre.component';

describe('ListTitreComponent', () => {
  let component: ListTitreComponent;
  let fixture: ComponentFixture<ListTitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTitreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

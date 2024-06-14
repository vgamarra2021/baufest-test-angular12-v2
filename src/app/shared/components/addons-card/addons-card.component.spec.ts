import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonsCardComponent } from './addons-card.component';

describe('AddonsCardComponent', () => {
  let component: AddonsCardComponent;
  let fixture: ComponentFixture<AddonsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddonsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

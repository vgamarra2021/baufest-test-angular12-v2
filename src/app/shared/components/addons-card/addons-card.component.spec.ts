import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddonsCardComponent } from './addons-card.component';

describe('AddonsCardComponent', () => {
  let component: AddonsCardComponent;
  let fixture: ComponentFixture<AddonsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddonsCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonsCardComponent);
    component = fixture.componentInstance;
    component.addon = {
      description: 'This is test',
      formControlName: 'test-control',
      price: 90,
      title: 'test',
      value: true,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

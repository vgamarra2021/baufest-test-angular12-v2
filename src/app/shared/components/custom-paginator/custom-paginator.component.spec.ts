import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomPaginatorComponent } from './custom-paginator.component';

describe('CustomPaginatorComponent', () => {
  let component: CustomPaginatorComponent;
  let fixture: ComponentFixture<CustomPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomPaginatorComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onPageChange with the correct page number', () => {
    spyOn(component.onPageChange, 'emit');
    const newPage = 2;
    component.pageChange(newPage);
    expect(component.onPageChange.emit).toHaveBeenCalledWith(newPage);
  });

  it('should set maxSize to 2 if window width is less than 480', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(400);
    component.ngOnInit();
    expect(component.maxSize).toBe(2);
  });

  it('should set maxSize to 5 if window width is 480 or greater', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(500);
    component.ngOnInit();
    expect(component.maxSize).toBe(5);
  });
});
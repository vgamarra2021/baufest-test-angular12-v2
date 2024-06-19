import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationsSectionContainer } from './locations-section.container';


describe('LocationsSectionContainer', () => {
  let component: LocationsSectionContainer;
  let fixture: ComponentFixture<LocationsSectionContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationsSectionContainer],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsSectionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

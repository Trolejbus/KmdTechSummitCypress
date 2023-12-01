import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicantAppComponent } from './applicant-app.component';

describe('ApplicantAppComponent', () => {
  let component: ApplicantAppComponent;
  let fixture: ComponentFixture<ApplicantAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicantAppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicantAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

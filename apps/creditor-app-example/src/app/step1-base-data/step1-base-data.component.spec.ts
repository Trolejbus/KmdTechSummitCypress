import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Step1BaseDataComponent } from './step1-base-data.component';

describe('Step1BaseDataComponent', () => {
  let component: Step1BaseDataComponent;
  let fixture: ComponentFixture<Step1BaseDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step1BaseDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Step1BaseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

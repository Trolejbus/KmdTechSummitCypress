import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Step2AdditionalDataComponent } from './step2-additional-data.component';

describe('Step2AdditionalDataComponent', () => {
  let component: Step2AdditionalDataComponent;
  let fixture: ComponentFixture<Step2AdditionalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step2AdditionalDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Step2AdditionalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

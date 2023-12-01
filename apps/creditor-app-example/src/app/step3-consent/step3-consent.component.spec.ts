import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Step3ConsentComponent } from './step3-consent.component';

describe('Step3ConsentComponent', () => {
  let component: Step3ConsentComponent;
  let fixture: ComponentFixture<Step3ConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step3ConsentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Step3ConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

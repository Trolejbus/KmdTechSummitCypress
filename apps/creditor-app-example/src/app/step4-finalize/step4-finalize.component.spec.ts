import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Step4FinalizeComponent } from './step4-finalize.component';

describe('Step4FinalizeComponent', () => {
  let component: Step4FinalizeComponent;
  let fixture: ComponentFixture<Step4FinalizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step4FinalizeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Step4FinalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

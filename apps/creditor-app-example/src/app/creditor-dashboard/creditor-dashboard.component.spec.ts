import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreditorDashboardComponent } from './creditor-dashboard.component';

describe('CreditorDashboardComponent', () => {
  let component: CreditorDashboardComponent;
  let fixture: ComponentFixture<CreditorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditorDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreditorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

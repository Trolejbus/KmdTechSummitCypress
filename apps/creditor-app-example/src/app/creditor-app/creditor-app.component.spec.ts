import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreditorAppComponent } from './creditor-app.component';

describe('CreditorAppComponent', () => {
  let component: CreditorAppComponent;
  let fixture: ComponentFixture<CreditorAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditorAppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreditorAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

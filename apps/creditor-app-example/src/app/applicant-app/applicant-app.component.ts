import { ChangeDetectorRef, Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'creditor-app-example-applicant-app',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatStepperModule,
    MatSelectModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  templateUrl: './applicant-app.component.html',
})
export class ApplicantAppComponent {

  private fb = inject(FormBuilder);
  private cd = inject(ChangeDetectorRef);

  public step1Completed = false;
  public step3Completed = false;
  
  @ViewChild('stepper')
  public stepper!: MatStepper;

  public goNext(): void {
    this.step1Completed = true;
    this.cd.detectChanges();
    this.stepper.next();
  }
}

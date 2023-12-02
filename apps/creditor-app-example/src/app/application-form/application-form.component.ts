import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ApplicationFormService } from './application-form.service';
import { Router } from '@angular/router';
import { NEVER, catchError } from 'rxjs';
import { CreateApplicationDto, LeasingType } from '@creditor-app-example/creditor-app-lib';

@Component({
  selector: 'creditor-app-example-application-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  providers: [
    ApplicationFormService,
  ],
  templateUrl: './application-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationFormComponent {

  private fb = inject(NonNullableFormBuilder);
  private service = inject(ApplicationFormService);
  private router = inject(Router);

  public form = this.fb.group({
    referenceNo: ['', [Validators.required]],
    applicantName: ['', [Validators.required]],
    applicantSurname: ['', [Validators.required]],
    applicantPhone: ['', [Validators.required]],
    applicantEmail: ['', [Validators.required]],
    loanAmount: [null as number | null, [Validators.required]],
    monthlyPaymentAmount: [null as number | null, [Validators.required]],
    initialPayment: [null as number | null, [Validators.required]],
    type: [null as LeasingType | null, [Validators.required]],
  });

  public submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }

    const formValue = this.form.getRawValue();
    this.form.disable();
    const dto = formValue as CreateApplicationDto;
    this.service.create(dto).pipe(
      catchError((err) => { console.log(err); this.form.enable(); return NEVER; }),
    ).subscribe(() => {
      this.router.navigate(['creditor-app']);
    });
  }
}

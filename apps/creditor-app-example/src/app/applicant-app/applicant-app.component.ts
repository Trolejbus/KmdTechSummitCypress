import { ChangeDetectorRef, Component, OnInit, ViewChild, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatStepper } from '@angular/material/stepper';
import { ApplicantAppService } from './applicant-app.service';
import { firstValueFrom } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
    MatProgressSpinnerModule,
  ],
  providers: [
    ApplicantAppService,
  ],
  templateUrl: './applicant-app.component.html',
})
export class ApplicantAppComponent implements OnInit {

  private cd = inject(ChangeDetectorRef);
  private service = inject(ApplicantAppService);
  private route = inject(ActivatedRoute);

  public stepsCompleted = signal(0);
  public loading = signal(true);
  public error = signal(false);
  public consentError = signal(false);
  public consented = signal(false);
  public finalized = signal(false);
  public finalizedError = signal(false);
  
  @ViewChild('stepper')
  public stepper!: MatStepper;

  async ngOnInit() {
    try {
      const params = await firstValueFrom(this.route.params);
      const app = await firstValueFrom(this.service.getById(params["id"]));
      this.stepsCompleted.set(app.status);
    }
    catch {
      this.error.set(true);
    }
    finally {
      this.loading.set(false);
    }
  }

  public async submitConsent(): Promise<void> {
    try {
      const params = await firstValueFrom(this.route.params);
      await firstValueFrom(this.service.init3rdParty(params["id"]));
      this.consented.set(true);
    }
    catch {
      this.consentError.set(true);
    }
  }

  public async selectedIndexChange(index: number): Promise<void> {
    if (index !== 3) {
      return;
    }

    try {
      const params = await firstValueFrom(this.route.params);
      await firstValueFrom(this.service.finalize(params["id"]));
    }
    catch {
      this.finalizedError.set(true);
    }
    finally {
      this.finalized.set(true);
    }
  }

  public async goNext(): Promise<void> {
    const params = await firstValueFrom(this.route.params);
    this.service.update(params["id"]).subscribe(() => {
      this.stepsCompleted.set(this.stepsCompleted() + 1);
    });
  }
}

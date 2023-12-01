import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreditorDashboardService } from './creditor-dashboard.service';

@Component({
  selector: 'creditor-app-example-creditor-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [
    CreditorDashboardService,
  ],
  templateUrl: './creditor-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreditorDashboardComponent {
  private service = inject(CreditorDashboardService);
  public cases$ = this.service.get();
}

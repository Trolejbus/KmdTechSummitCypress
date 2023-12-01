import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'creditor-app-example-step3-consent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step3-consent.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step3ConsentComponent {}

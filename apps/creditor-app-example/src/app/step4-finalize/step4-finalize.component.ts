import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'creditor-app-example-step4-finalize',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step4-finalize.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step4FinalizeComponent {}

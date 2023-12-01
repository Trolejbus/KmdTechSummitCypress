import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'creditor-app-example-step2-additional-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step2-additional-data.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step2AdditionalDataComponent {}

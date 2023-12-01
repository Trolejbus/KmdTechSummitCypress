import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'creditor-app-example-step1-base-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step1-base-data.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step1BaseDataComponent {}

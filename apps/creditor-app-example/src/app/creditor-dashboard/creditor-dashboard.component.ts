import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'creditor-app-example-creditor-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './creditor-dashboard.component.html',
})
export class CreditorDashboardComponent {
  public cases$ = of([{
    referenceNo: 'RefNo',
    applicantName: 'Test',
  },
  {
    referenceNo: 'RefNo2',
    applicantName: 'Test',
  },{
    referenceNo: 'RefNo3',
    applicantName: 'Test',
  }])

}

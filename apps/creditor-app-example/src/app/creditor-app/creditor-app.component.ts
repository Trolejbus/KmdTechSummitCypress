import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'creditor-app-example-creditor-app',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './creditor-app.component.html',
})
export class CreditorAppComponent {}

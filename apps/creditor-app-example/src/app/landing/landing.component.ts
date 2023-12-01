import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'creditor-app-example-landing',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './landing.component.html',
})
export class LandingComponent {}

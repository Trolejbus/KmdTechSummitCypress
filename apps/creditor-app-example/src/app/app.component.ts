import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  selector: 'creditor-app-example-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
}

import { Routes } from '@angular/router';
import { ApplicationFormComponent } from '../application-form/application-form.component';
import { CreditorAppComponent } from './creditor-app.component';
import { CreditorDashboardComponent } from '../creditor-dashboard/creditor-dashboard.component';

export const CREDITOR_APP_ROUTES: Routes = [
    {
        path: '',
        component: CreditorAppComponent,
        children: [
            {
                path: 'form',
                component: ApplicationFormComponent,
            },
            {
                path: '',
                component: CreditorDashboardComponent,
            },
        ],
    }
];

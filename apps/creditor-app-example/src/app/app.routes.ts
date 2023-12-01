import { Route } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const appRoutes: Route[] = [
    {
        path: 'creditor-app',
        loadChildren: () => import('./creditor-app/routes').then(mod => mod.CREDITOR_APP_ROUTES),
    },
    {
        path: 'applicant-app',
        loadChildren: () => import('./applicant-app/routes').then(mod => mod.APPLICANT_APP_ROUTES),
    },
    {
        path: '',
        component: LandingComponent,
    },
];

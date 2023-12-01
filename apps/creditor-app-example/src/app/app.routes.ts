import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'creditor-app',
        loadChildren: () => import('./creditor-app/routes').then(mod => mod.CREDITOR_APP_ROUTES),
    },
];

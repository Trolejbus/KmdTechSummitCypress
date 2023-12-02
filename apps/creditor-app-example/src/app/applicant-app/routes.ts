import { Routes } from "@angular/router";
import { ApplicantAppComponent } from "./applicant-app.component";

export const APPLICANT_APP_ROUTES: Routes = [
    {
        path: ':id',
        component: ApplicantAppComponent,
    }
];

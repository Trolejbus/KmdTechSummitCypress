import { Routes } from "@angular/router";
import { ApplicantAppComponent } from "./applicant-app.component";
import { Step1BaseDataComponent } from "../step1-base-data/step1-base-data.component";
import { Step2AdditionalDataComponent } from "../step2-additional-data/step2-additional-data.component";
import { Step3ConsentComponent } from "../step3-consent/step3-consent.component";
import { Step4FinalizeComponent } from "../step4-finalize/step4-finalize.component";

export const APPLICANT_APP_ROUTES: Routes = [
    {
        path: ':id',
        component: ApplicantAppComponent,
        children: [
            {
                path: '',
                component: Step1BaseDataComponent,
            },
            {
                path: 'data',
                component: Step2AdditionalDataComponent,
            },
            {
                path: 'consent',
                component: Step3ConsentComponent,
            },
            {
                path: 'finalize',
                component: Step4FinalizeComponent,
            },
        ],
    }
];

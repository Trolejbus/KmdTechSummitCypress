import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApplicationDto } from "@creditor-app-example/creditor-app-lib";
import { Observable } from "rxjs";

@Injectable()
export class CreditorDashboardService {
    
    constructor (private httpClient: HttpClient) {
    }

    public get(): Observable<ApplicationDto[]> {
        return this.httpClient.get<ApplicationDto[]>('http://localhost:3000/applications');
    }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApplicationDto } from "@creditor-app-example/creditor-app-lib";
import { Observable } from "rxjs";

@Injectable()
export class ApplicantAppService {

    constructor (private httpClient: HttpClient) {
    }

    public update(id: number): Observable<void> {
        return this.httpClient.put<void>(`http://localhost:3000/applications/${id}`, null);
    }

    public getById(id: number): Observable<ApplicationDto> {
        return this.httpClient.get<ApplicationDto>(`http://localhost:3000/applications/${id}`);
    }

    public init3rdParty(id: number): Observable<void> {
        return this.httpClient.put<void>(`http://localhost:3000/applications/${id}/init3rdParty`, null);
    }
}

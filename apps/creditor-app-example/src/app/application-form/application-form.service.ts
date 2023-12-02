import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreateApplicationDto } from "@creditor-app-example/creditor-app-lib";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApplicationFormService {

    constructor (private httpClient: HttpClient) {
    }

    public create(dto: CreateApplicationDto): Observable<void> {
        return this.httpClient.post<void>('http://localhost:3000/applications', dto);
    }
}

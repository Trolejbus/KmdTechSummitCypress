import { Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { CreateApplicationDto } from "@creditor-app-example/creditor-app-lib";

@Injectable()
export class ApplicationFormService {
    public create(dto: CreateApplicationDto): Observable<void> {
        return of(dto).pipe(
            map(_ => undefined),
        );
    }
}

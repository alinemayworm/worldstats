import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, take, throwError } from "rxjs";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  public get(url: string): Observable<any> {
    return this.http.get(url).pipe(take(1), catchError(this.handleError));
  }

  private handleError() {
    return throwError(
      () => new Error("Something bad happened; please try again later.")
    );
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, take } from "rxjs";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  public get(url: string): Observable<any> {
    return this.http.get(url).pipe(take(1));
  }
}

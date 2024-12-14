import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../environment/environment";

@Injectable({
  providedIn: 'root' 
})
export class HttpRequestService {
  private options = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": environment.apiKey,
    }),
  };

  constructor(http: HttpClient) {}

  http: HttpClient = inject(HttpClient);

  postLogin(json: any) {
    return this.http.post<any>(`${environment.apiUrl}/login`, json, this.options);
  }

}
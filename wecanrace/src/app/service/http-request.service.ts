import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  constructor(private http: HttpClient) {}

  private options = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": environment.apiKey,
    }),
  };

  postLogin(json: any) {
    return this.http.post(`${environment.apiUrl}/login`, json, this.options);
  }

  postRegister(json: any) {
    return this.http.post(`${environment.apiUrl}/register`, json, this.options);
  }
}
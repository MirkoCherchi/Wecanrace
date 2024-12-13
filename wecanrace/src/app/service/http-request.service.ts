import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: environment.apiUrl, 
      headers: {
        'Content-Type': 'application/json',
        "x-api-key": environment.apiKey,
      },
      timeout: 10000,
    });
  }

  // Login
  async login(data : any): Promise<any> {
    try {
      const response = await this.axiosClient.post('/login', data);
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  }

  // Register
  async register(data: {
    name: string;
    lastName: string;
    email: string;
    password: string;
    repassword: string;
  }): Promise<any> {
    try {
      const response = await this.axiosClient.post('/register', data);
      return response.data;
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  }
}

import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: 'http://localhost:3030',
      headers: {
        'Content-Type': 'application/json',
        'API-KEY': process.env['API_KEY'],
      },
      timeout: 10000,
    });
  }

  // Login
  async login(data: { email: string; password: string }): Promise<any> {
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

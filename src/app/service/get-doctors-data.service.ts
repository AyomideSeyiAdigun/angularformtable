import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDoctorsDataService {
  private DOCTORS_URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }
}

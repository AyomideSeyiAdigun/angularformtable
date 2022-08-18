import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DOCTOR } from '../../types/doctor';

@Injectable({
  providedIn: 'root'
})
export class GetDoctorsDataService {
  private DOCTORS_URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getDoctors(): Observable<DOCTOR[]> {
    return this.http.get<any[]>(this.DOCTORS_URL)
  }

  addDoctor(data: any) {
    console.log(data)
    let a = this.http.post(this.DOCTORS_URL, data)
    console.log(a)
    return a
  }
}

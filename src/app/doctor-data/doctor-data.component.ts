import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DOCTOR, DOCTOR_LIST_STATUS } from '../types/doctor';

@Component({
  selector: 'app-doctor-data',
  templateUrl: './doctor-data.component.html',
  styleUrls: ['./doctor-data.component.css']
})
export class DoctorDataComponent implements OnInit {



  DOCTOR_LIST_STATUS : typeof DOCTOR_LIST_STATUS = DOCTOR_LIST_STATUS;

  @Input() doctor: DOCTOR;

  constructor() { }

  ngOnInit(): void {
  }

}

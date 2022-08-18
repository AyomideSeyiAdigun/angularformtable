import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'

import { GetDoctorsDataService } from '../../Services/service/get-doctors-data.service';


@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  constructor(private doctorService: GetDoctorsDataService) { }

  ngOnInit(): void {
  }

  docRegForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    website: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  })

  @Output() newDoctorInfo: EventEmitter<any> = new EventEmitter<object>();

  registerDoc() {
    this.doctorService.addDoctor(this.docRegForm.value).subscribe((data) => {
      this.newDoctorInfo.emit(data);
    })
    for(var name in this.docRegForm.controls) {
      (<FormControl> this.docRegForm.controls[name]).setValue('');
      this.docRegForm.controls[name].setErrors(null);
    }
  }




  get name() {
    return this.docRegForm.get('name')
  }
  get email() {
    return this.docRegForm.get('email')
  }
  get phone() {
    return this.docRegForm.get('phone')
  }
  get username() {
    return this.docRegForm.get('username')
  }
  get address() {
    return this.docRegForm.get('address')
  }
  get website() {
    return this.docRegForm.get('website')
  }
}

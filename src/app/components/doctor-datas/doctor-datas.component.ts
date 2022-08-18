import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadButtonComponent } from '../load-button/load-button.component';
import { GetDoctorsDataService } from '../../Services/service/get-doctors-data.service';
import { BUTTON_STATE } from '../../types/btn-state';
import { DOCTOR } from '../../types/doctor';

@Component({
  selector: 'app-doctor-datas',
  templateUrl: './doctor-datas.component.html',
  styleUrls: ['./doctor-datas.component.css']
})
export class DoctorDatasComponent implements OnInit {

  doctors: DOCTOR[] = [];

  buttonState!: BUTTON_STATE;
  stateChange!: string;

  searchText: string = ''

  @ViewChild(LoadButtonComponent, { static: true })

  private LoadButton!: LoadButtonComponent;

  constructor(private doctorService: GetDoctorsDataService) { }

  ngOnInit(): void {
  }
  onStateChange(state: BUTTON_STATE) {

    if (state == BUTTON_STATE.LOADING) {



      this.doctorService.getDoctors().subscribe(
        (doctor) => {
          console.log(doctor)
          this.stateChange = 'successful';
          this.setButtonState(BUTTON_STATE.LOADED_AND_DELAYING);
          this.doctors = doctor;
        },
        () => {
          this.stateChange = 'failed';
          this.setButtonState(BUTTON_STATE.ERROR);
        }
      )

    }
  }

  onSearchTextEntered(searchValue: any) {
    this.searchText = searchValue;
    console.log(searchValue)
  }

  registerNewDoctor(newDoc:any){
    this.doctors.push(newDoc)
  }
  private setButtonState(state: BUTTON_STATE) {
    this.LoadButton.state = state;
  }
}



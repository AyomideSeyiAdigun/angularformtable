import { Component, OnInit } from '@angular/core';
import { GetDoctorsDataService } from '../service/get-doctors-data.service';
import { BUTTON_STATE } from '../types/btn-state';
import { DOCTOR } from '../types/doctor';

@Component({
  selector: 'app-doctor-datas',
  templateUrl: './doctor-datas.component.html',
  styleUrls: ['./doctor-datas.component.css']
})
export class DoctorDatasComponent implements OnInit {

  doctors: DOCTOR[];

  buttonState: BUTTON_STATE;

  constructor(private doctorService: GetDoctorsDataService) { }

  ngOnInit(): void {
  }
  onStateChange(state: BUTTON_STATE) {

    if( state == BUTTON_STATE.LOADING ) {

      this.doctors = [];

      this.doctorService. getdoctors().subscribe(
        (doctors) => {
          this.setButtonState(BUTTON_STATE.LOADED_AND_DELAYING);
        },
        () => {
          this.setButtonState(BUTTON_STATE.ERROR);
        }
      );
    }
  }

  private setButtonState( state:BUTTON_STATE ){
    this.TodoButton.state = state;
  }
}

}

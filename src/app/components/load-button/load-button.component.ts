import { Input, Output, SimpleChanges } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, concatMap } from 'rxjs/operators';
import { config } from '../../data/config';
import { BUTTON_STATE } from '../../types/btn-state';

@Component({
  selector: 'app-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  constructor() { }

  BUTTON_STATE : typeof BUTTON_STATE = BUTTON_STATE;

  @Input()
  changeState!: string;
  @Output() stateChange = new EventEmitter<BUTTON_STATE>();

  private delaySecs: number = config.delayAfterLoadSecs;

  private _state: BUTTON_STATE | undefined;

  set state(state){
    this._state = state;
    this.reflectState();
    this.stateChange.emit(state);
  }

  get state(){
    return this._state;
  }

  btnText: string | undefined;
  btnDisabled:boolean | undefined;

  ngOnInit() {
    this.state = BUTTON_STATE.LOADING;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.changeState === 'failed') {
      this.state = BUTTON_STATE.ERROR;
      console.log('hi');
    } else if (this.changeState === 'successful') {
      this.state = BUTTON_STATE.LOADED_AND_DELAYING;
      console.log('his');
    }
  }

  onClick(){
    this.state = BUTTON_STATE.LOADING;
  }

  private reflectState(){

    switch (this.state) {

      case BUTTON_STATE.LOADING:
        this.btnText = 'loading...';
        this.btnDisabled = true;
        break;

      case BUTTON_STATE.LOADED_AND_DELAYING:
        this.btnDisabled = true;
        this.delay()
        .pipe(concatMap((item) => of(item).pipe(delay(1000))))
        .subscribe({
          next: (remainingTime:any) => {
            this.btnText = `wait ${remainingTime} sec${
              remainingTime > 1 ? 's' : ''
            } `;
          },
          complete:()=>{
            this.state = BUTTON_STATE.LOADED;
          }
        });
        break;
        case BUTTON_STATE.LOADED:
          this.btnDisabled = false;
          this.btnText = 'reload';
          break;
        case BUTTON_STATE.ERROR:
          this.btnDisabled = false;
          this.btnText = 'load error. retry';
          break;
    }
  }

  private delay() : Observable<number  >{

    const delaySec = this.delaySecs;
    return of (delaySec);
  }

}
// function concatMap(arg0: (item: any) => Observable<unknown>): import("rxjs").OperatorFunction<string | number, unknown> {
//   throw new Error('Function not implemented.');
// }


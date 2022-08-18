import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDatasComponent } from './doctor-datas.component';

describe('DoctorDatasComponent', () => {
  let component: DoctorDatasComponent;
  let fixture: ComponentFixture<DoctorDatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorDatasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

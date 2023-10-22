import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import {Vehicle} from './../vehicle';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css'],
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule
  ]
})
export class VehicleEditComponent {
  @Input() vehicle: Vehicle = new Vehicle(0, "", "", 0, "");

  @Output() editDataEvent = new EventEmitter();

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    this.http.post<Vehicle>(
      "http://localhost:8080/vehicles",
      this.vehicle
    ).subscribe(data => this.editDataEvent.emit(data));
  }
}

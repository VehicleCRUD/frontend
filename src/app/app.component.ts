import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Vehicle} from './vehicle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vehicles: Vehicle[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Vehicle[]>(
      "http://localhost:8080/vehicles"
    ).subscribe(data => this.vehicles = data);
  }
}

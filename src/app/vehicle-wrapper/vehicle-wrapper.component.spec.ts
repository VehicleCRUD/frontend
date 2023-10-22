import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleWrapperComponent } from './vehicle-wrapper.component';

describe('VehicleWrapperComponent', () => {
  let component: VehicleWrapperComponent;
  let fixture: ComponentFixture<VehicleWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleWrapperComponent]
    });
    fixture = TestBed.createComponent(VehicleWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

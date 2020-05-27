import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TripByCargoOwnerComponent} from './trip-by-cargo-owner.component';

describe('TripByCargoOwnerComponent', () => {
  let component: TripByCargoOwnerComponent;
  let fixture: ComponentFixture<TripByCargoOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripByCargoOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripByCargoOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

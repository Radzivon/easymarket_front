import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CargoOwnerComponent} from './cargo-owner.component';

describe('CargoOwnerComponent', () => {
  let component: CargoOwnerComponent;
  let fixture: ComponentFixture<CargoOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

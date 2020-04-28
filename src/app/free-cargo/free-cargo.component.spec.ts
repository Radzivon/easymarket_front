import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FreeCargoComponent} from './free-cargo.component';

describe('FreeCargoComponent', () => {
  let component: FreeCargoComponent;
  let fixture: ComponentFixture<FreeCargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeCargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

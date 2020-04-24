import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CargComponent} from './carg.component';

describe('CargComponent', () => {
  let component: CargComponent;
  let fixture: ComponentFixture<CargComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

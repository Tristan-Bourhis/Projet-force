import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpeComponent } from './rpe.component';

describe('RpeComponent', () => {
  let component: RpeComponent;
  let fixture: ComponentFixture<RpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

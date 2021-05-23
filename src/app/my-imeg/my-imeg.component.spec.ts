import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImegComponent } from './my-imeg.component';

describe('MyImegComponent', () => {
  let component: MyImegComponent;
  let fixture: ComponentFixture<MyImegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyImegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyImegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponComponent } from './my-compon.component';

describe('MyComponComponent', () => {
  let component: MyComponComponent;
  let fixture: ComponentFixture<MyComponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

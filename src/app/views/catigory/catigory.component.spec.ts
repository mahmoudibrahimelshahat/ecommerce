import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatigoryComponent } from './catigory.component';

describe('CatigoryComponent', () => {
  let component: CatigoryComponent;
  let fixture: ComponentFixture<CatigoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatigoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatigoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

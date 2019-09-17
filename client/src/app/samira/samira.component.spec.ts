import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamiraComponent } from './samira.component';

describe('SamiraComponent', () => {
  let component: SamiraComponent;
  let fixture: ComponentFixture<SamiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

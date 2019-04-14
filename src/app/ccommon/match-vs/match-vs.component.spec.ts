import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchVsComponent } from './match-vs.component';

describe('MatchVsComponent', () => {
  let component: MatchVsComponent;
  let fixture: ComponentFixture<MatchVsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchVsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchVsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

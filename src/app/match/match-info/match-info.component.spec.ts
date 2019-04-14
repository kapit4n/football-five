import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchInfoComponent } from './match-info.component';

describe('MatchInfoComponent', () => {
  let component: MatchInfoComponent;
  let fixture: ComponentFixture<MatchInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

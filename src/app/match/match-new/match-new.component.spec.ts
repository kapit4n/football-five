import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchNewComponent } from './match-new.component';

describe('MatchNewComponent', () => {
  let component: MatchNewComponent;
  let fixture: ComponentFixture<MatchNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

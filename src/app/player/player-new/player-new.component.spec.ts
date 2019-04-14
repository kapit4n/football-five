import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerNewComponent } from './player-new.component';

describe('PlayerNewComponent', () => {
  let component: PlayerNewComponent;
  let fixture: ComponentFixture<PlayerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

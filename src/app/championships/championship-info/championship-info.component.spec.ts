import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipInfoComponent } from './championship-info.component';

describe('ChampionshipInfoComponent', () => {
  let component: ChampionshipInfoComponent;
  let fixture: ComponentFixture<ChampionshipInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionshipInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

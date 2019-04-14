import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingTableGroupsComponent } from './standing-table-groups.component';

describe('StandingTableGroupsComponent', () => {
  let component: StandingTableGroupsComponent;
  let fixture: ComponentFixture<StandingTableGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingTableGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingTableGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

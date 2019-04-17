import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListComponent } from './team-list.component';

describe('TeamListComponent', () => {
  let component: TeamListComponent;
  let fixture: ComponentFixture<TeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Tests that the component was created
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // Tests that the component has the list of team
  it('should show team list table', () => {
    //TODO Get component table
    //TODO Assert table is on the component
  });
    
  // Tests that the team id and name columns are shown in the table
  it('should show team list table', () => {
    //TODO Get the component table
    //TODO Query the first team info(id, name)
    //TODO Assert that the id and name are not null or empty
  });
  
});

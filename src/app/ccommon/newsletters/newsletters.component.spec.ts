import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslettersComponent } from './newsletters.component';

describe('NewslettersComponent', () => {
  let component: NewslettersComponent;
  let fixture: ComponentFixture<NewslettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewslettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewslettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should show the newsletters related to parent', () => {
    // Get newletters by parent id
    // Verify that the newsletters are listed on the page
    expect(component).toBeTruthy();
  });

});

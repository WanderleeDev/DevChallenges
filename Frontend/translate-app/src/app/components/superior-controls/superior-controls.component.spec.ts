import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperiorControlsComponent } from './superior-controls.component';

describe('SuperiorControlsComponent', () => {
  let component: SuperiorControlsComponent;
  let fixture: ComponentFixture<SuperiorControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperiorControlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperiorControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

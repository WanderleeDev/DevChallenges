import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerControlsComponent } from './lower-controls.component';

describe('LowerControlsComponent', () => {
  let component: LowerControlsComponent;
  let fixture: ComponentFixture<LowerControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowerControlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowerControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

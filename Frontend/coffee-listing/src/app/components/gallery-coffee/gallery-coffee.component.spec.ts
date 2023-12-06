import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCoffeeComponent } from './gallery-coffee.component';

describe('GalleryCoffeeComponent', () => {
  let component: GalleryCoffeeComponent;
  let fixture: ComponentFixture<GalleryCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryCoffeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

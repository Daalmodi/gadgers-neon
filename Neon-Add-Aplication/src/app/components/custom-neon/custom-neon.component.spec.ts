import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNeonComponent } from './custom-neon.component';

describe('CustomNeonComponent', () => {
  let component: CustomNeonComponent;
  let fixture: ComponentFixture<CustomNeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomNeonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomNeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonFormComponent } from './neon-form.component';

describe('NeonFormComponent', () => {
  let component: NeonFormComponent;
  let fixture: ComponentFixture<NeonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeonFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

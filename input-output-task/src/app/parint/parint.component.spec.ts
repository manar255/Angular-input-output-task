import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParintComponent } from './parint.component';

describe('ParintComponent', () => {
  let component: ParintComponent;
  let fixture: ComponentFixture<ParintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

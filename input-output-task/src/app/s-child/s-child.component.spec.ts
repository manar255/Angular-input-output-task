import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SChildComponent } from './s-child.component';

describe('SChildComponent', () => {
  let component: SChildComponent;
  let fixture: ComponentFixture<SChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

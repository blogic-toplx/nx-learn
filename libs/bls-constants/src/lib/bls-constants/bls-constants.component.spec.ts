import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlsConstantsComponent } from './bls-constants.component';

describe('BlsConstantsComponent', () => {
  let component: BlsConstantsComponent;
  let fixture: ComponentFixture<BlsConstantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlsConstantsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlsConstantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

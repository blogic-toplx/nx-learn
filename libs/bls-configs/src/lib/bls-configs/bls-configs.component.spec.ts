import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlsConfigsComponent } from './bls-configs.component';

describe('BlsConfigsComponent', () => {
  let component: BlsConfigsComponent;
  let fixture: ComponentFixture<BlsConfigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlsConfigsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlsConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

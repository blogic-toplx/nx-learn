import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlsModelsComponent } from './bls-models.component';

describe('BlsModelsComponent', () => {
  let component: BlsModelsComponent;
  let fixture: ComponentFixture<BlsModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlsModelsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlsModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

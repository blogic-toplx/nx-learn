import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlsStoreComponent } from './bls-store.component';

describe('BlsStoreComponent', () => {
  let component: BlsStoreComponent;
  let fixture: ComponentFixture<BlsStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlsStoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

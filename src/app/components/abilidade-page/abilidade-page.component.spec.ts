import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilidadePageComponent } from './abilidade-page.component';

describe('AbilidadePageComponent', () => {
  let component: AbilidadePageComponent;
  let fixture: ComponentFixture<AbilidadePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilidadePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilidadePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrategiaPageComponent } from './estrategia-page.component';

describe('EstrategiaPageComponent', () => {
  let component: EstrategiaPageComponent;
  let fixture: ComponentFixture<EstrategiaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstrategiaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstrategiaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

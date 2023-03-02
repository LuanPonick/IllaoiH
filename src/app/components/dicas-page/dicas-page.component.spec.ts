import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicasPageComponent } from './dicas-page.component';

describe('DicasPageComponent', () => {
  let component: DicasPageComponent;
  let fixture: ComponentFixture<DicasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicasPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DicasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

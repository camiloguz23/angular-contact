import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDataContactComponent } from './ui-data-contact.component';

describe('UiDataContactComponent', () => {
  let component: UiDataContactComponent;
  let fixture: ComponentFixture<UiDataContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiDataContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiDataContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

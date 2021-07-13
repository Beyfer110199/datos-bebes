import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastenotfoundComponent } from './pastenotfound.component';

describe('PastenotfoundComponent', () => {
  let component: PastenotfoundComponent;
  let fixture: ComponentFixture<PastenotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastenotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

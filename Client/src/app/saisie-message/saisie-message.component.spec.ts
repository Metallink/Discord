import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieMessageComponent } from './saisie-message.component';

describe('SaisieMessageComponent', () => {
  let component: SaisieMessageComponent;
  let fixture: ComponentFixture<SaisieMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisieMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

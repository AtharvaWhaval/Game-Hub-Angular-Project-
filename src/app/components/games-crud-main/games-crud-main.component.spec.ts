import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesCrudMainComponent } from './games-crud-main.component';

describe('GamesCrudMainComponent', () => {
  let component: GamesCrudMainComponent;
  let fixture: ComponentFixture<GamesCrudMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesCrudMainComponent]
    });
    fixture = TestBed.createComponent(GamesCrudMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

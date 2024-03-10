import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameGenreCardsComponent } from './game-genre-cards.component';

describe('GameGenreCardsComponent', () => {
  let component: GameGenreCardsComponent;
  let fixture: ComponentFixture<GameGenreCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameGenreCardsComponent]
    });
    fixture = TestBed.createComponent(GameGenreCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

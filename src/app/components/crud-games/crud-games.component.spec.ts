import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudGamesComponent } from './crud-games.component';

describe('CrudGamesComponent', () => {
  let component: CrudGamesComponent;
  let fixture: ComponentFixture<CrudGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudGamesComponent]
    });
    fixture = TestBed.createComponent(CrudGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

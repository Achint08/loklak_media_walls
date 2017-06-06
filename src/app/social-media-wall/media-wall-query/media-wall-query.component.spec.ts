import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaWallQueryComponent } from './media-wall-query.component';

describe('MediaWallQueryComponent', () => {
  let component: MediaWallQueryComponent;
  let fixture: ComponentFixture<MediaWallQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaWallQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaWallQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

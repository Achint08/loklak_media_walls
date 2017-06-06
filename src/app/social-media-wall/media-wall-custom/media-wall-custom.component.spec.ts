import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaWallCustomComponent } from './media-wall-custom.component';

describe('MediaWallCustomComponent', () => {
  let component: MediaWallCustomComponent;
  let fixture: ComponentFixture<MediaWallCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaWallCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaWallCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

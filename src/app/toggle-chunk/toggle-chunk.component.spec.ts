import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleChunkComponent } from './toggle-chunk.component';

describe('ToggleBlockComponent', () => {
  let component: ToggleChunkComponent;
  let fixture: ComponentFixture<ToggleChunkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleChunkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleChunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

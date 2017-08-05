import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlxComponent } from './flx.component';

describe('FlxComponent', () => {
  let component: FlxComponent;
  let fixture: ComponentFixture<FlxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

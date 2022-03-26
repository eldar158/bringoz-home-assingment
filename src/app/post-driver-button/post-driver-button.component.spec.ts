import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDriverButtonComponent } from './post-driver-button.component';

describe('PostDriverButtonComponent', () => {
  let component: PostDriverButtonComponent;
  let fixture: ComponentFixture<PostDriverButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDriverButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDriverButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageSignUp1Component } from './sign-up-1.component';

// esse arquivo é usado só para testes de unidade!!
// não confundir com o component.ts!!!

describe('PageSignUp1Component', () => {
  let component: PageSignUp1Component;
  let fixture: ComponentFixture<PageSignUp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSignUp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSignUp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

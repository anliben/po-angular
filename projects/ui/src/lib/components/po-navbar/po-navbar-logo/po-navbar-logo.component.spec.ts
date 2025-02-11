import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoNavbarLogoComponent } from './po-navbar-logo.component';

describe('PoNavbarLogoComponent:', () => {
  let component: PoNavbarLogoComponent;
  let fixture: ComponentFixture<PoNavbarLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoNavbarLogoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PoNavbarLogoComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component instanceof PoNavbarLogoComponent).toBeTruthy();
  });

  describe('Templates:', () => {
    it('should create tag img if `logo` has value', () => {
      component.logo = 'http://lorempixel.com/200/200/';

      fixture.detectChanges();

      expect(fixture.debugElement.nativeElement.querySelector('.po-navbar-logo-image')).toBeTruthy();
    });

    it('shouldn`t create tag img if `logo` is undefined', () => {
      component.logo = undefined;

      fixture.detectChanges();

      expect(fixture.debugElement.nativeElement.querySelector('.po-navbar-logo-image')).toBeNull();
    });
  });
});

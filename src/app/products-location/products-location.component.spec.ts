import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLocationComponent } from './products-location.component';

describe('ProductsLocationComponent', () => {
  let component: ProductsLocationComponent;
  let fixture: ComponentFixture<ProductsLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

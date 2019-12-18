import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewCategoryProductPage } from './view-category-product.page';

describe('ViewCategoryProductPage', () => {
  let component: ViewCategoryProductPage;
  let fixture: ComponentFixture<ViewCategoryProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCategoryProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCategoryProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

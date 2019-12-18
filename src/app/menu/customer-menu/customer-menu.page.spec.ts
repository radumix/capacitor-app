import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerMenuPage } from './customer-menu.page';

describe('CustomerMenuPage', () => {
  let component: CustomerMenuPage;
  let fixture: ComponentFixture<CustomerMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

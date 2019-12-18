import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RateUsPage } from './rate-us.page';

describe('RateUsPage', () => {
  let component: RateUsPage;
  let fixture: ComponentFixture<RateUsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateUsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RateUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

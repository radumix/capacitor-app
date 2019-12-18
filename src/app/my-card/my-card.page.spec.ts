import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyCardPage } from './my-card.page';

describe('MyCardPage', () => {
  let component: MyCardPage;
  let fixture: ComponentFixture<MyCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

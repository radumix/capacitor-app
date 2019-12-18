import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SunsComponent } from './suns.component';

describe('SunsComponent', () => {
  let component: SunsComponent;
  let fixture: ComponentFixture<SunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LefthandlebarComponent } from './lefthandlebar.component';

describe('LefthandlebarComponent', () => {
  let component: LefthandlebarComponent;
  let fixture: ComponentFixture<LefthandlebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LefthandlebarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LefthandlebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

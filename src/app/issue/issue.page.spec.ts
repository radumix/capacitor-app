import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IssuePage } from './issue.page';

describe('IssuePage', () => {
  let component: IssuePage;
  let fixture: ComponentFixture<IssuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IssuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

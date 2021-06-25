import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmorePage } from './emore.page';

describe('EmorePage', () => {
  let component: EmorePage;
  let fixture: ComponentFixture<EmorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

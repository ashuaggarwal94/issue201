import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IshDisplayAppsComponent } from './ish-display-apps.component';

describe('IshDisplayAppsComponent', () => {
  let component: IshDisplayAppsComponent;
  let fixture: ComponentFixture<IshDisplayAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IshDisplayAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IshDisplayAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

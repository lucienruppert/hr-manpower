import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { HrProviderViewComponent } from "./hr-provider-view.component";

describe("HrProviderViewComponent", () => {
  let component: HrProviderViewComponent;
  let fixture: ComponentFixture<HrProviderViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HrProviderViewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrProviderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

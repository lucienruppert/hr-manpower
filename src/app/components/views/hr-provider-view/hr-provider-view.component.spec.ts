/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { HrProviderViewComponent } from "./hr-provider-view.component";

describe("HrProviderViewComponent", () => {
  let component: HrProviderViewComponent;
  let fixture: ComponentFixture<HrProviderViewComponent>;

  beforeEach(async(() => {
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

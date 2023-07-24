import { ComponentFixture, TestBed } from "@angular/core/testing";

import { WorldMapComponent } from "./world-map.component";

describe("WorldMapComponent", () => {
  let component: WorldMapComponent;
  let fixture: ComponentFixture<WorldMapComponent>;

  const mockGoogleMaps = {
    maps: {
      LatLng: class {
        constructor() {}
      },
      Map: class {},
      Marker: class {},
      MapTypeId: {
        ROADMAP: "roadmap",
        SATELLITE: "satellite",
        HYBRID: "hybrid",
        TERRAIN: "terrain",
      },
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorldMapComponent],
    }).compileComponents();

    (window as any).google = mockGoogleMaps;

    fixture = TestBed.createComponent(WorldMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

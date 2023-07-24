import { of } from "rxjs";
import { HttpService } from "./http.service";

describe("HttpService", () => {
  let service: HttpService;

  let mockHttp = {
    get: () => of(),
  };
  beforeEach(() => {
    service = new HttpService(mockHttp as any);
  });

  it("should create", () => {
    expect(service).toBeTruthy();
  });

  it("should perform get method", () => {
    const spyGet = spyOn(service["http"], "get").and.returnValue(
      of({
        response: "get works!",
      })
    );

    service.get("").subscribe((res) => {
      expect(spyGet).toHaveBeenCalledWith("");
      expect(res.response).toEqual("get works!");
    });
  });
});

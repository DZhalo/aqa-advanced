const { fetchWithHeadersAndParams } = require("./api.cjs");

describe("Task 2 - Testing request headers and params", () => {
  test("should include custom headers and query params", async () => {
    const baseUrl = "https://httpbin.org/anything";
    const headers = {
      "X-Custom-Header": "HelloAxios",
    };
    const params = {
      page: 2,
      sort: "asc",
    };

    const response = await fetchWithHeadersAndParams({ baseUrl, headers, params });

    expect(response.status).toBe(200);

    expect(response.data.args).toEqual({
      page: "2",
      sort: "asc",
    });

    const returnedHeaders = response.data.headers;
    expect(returnedHeaders).toEqual(
      expect.objectContaining({
        "X-Custom-Header": "HelloAxios",
      })
    );
  });
});
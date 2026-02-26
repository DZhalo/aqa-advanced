const { fetchWithWrongUrl } = require("./api.cjs");

describe("Task 1 - Error handling for wrong URL", () => {
  test("should return proper error message when URL is wrong", async () => {
    const result = await fetchWithWrongUrl();
    expect(result).toBe("Request failed with status 404");
  });
});
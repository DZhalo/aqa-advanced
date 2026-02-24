jest.mock("axios"); 

const axios = require("axios");
const { getUser } = require("./api.cjs");

describe("Task 3 - Mocking axios", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should return user data on success", async () => {
    axios.get.mockResolvedValueOnce({
      data: { id: 1, name: "Mocked User" },
    });

    const user = await getUser(1);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users/1");
    expect(user).toEqual({ id: 1, name: "Mocked User" });
  });

  test("should throw error on request failure", async () => {
    axios.get.mockRejectedValueOnce(new Error("Request failed"));

    await expect(getUser(999)).rejects.toThrow("Request failed");
    expect(axios.get).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users/999");
  });
});
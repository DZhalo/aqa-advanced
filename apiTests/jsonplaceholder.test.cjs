const axios = require("axios");

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
});

describe("JSONPlaceholder API tests (axios + jest)", () => {
  test("GET /posts/1 returns correct status and data shape", async () => {
    const response = await api.get("/posts/1");

    expect(response.status).toBe(200);
    expect(response.data).toEqual(
      expect.objectContaining({
        userId: expect.any(Number),
        id: 1,
        title: expect.any(String),
        body: expect.any(String),
      })
    );
  });

  test("GET /users/1 returns correct status and user fields", async () => {
    const response = await api.get("/users/1");

    expect(response.status).toBe(200);
    expect(response.data).toEqual(
      expect.objectContaining({
        id: 1,
        name: expect.any(String),
        username: expect.any(String),
        email: expect.any(String),
      })
    );
  });

  test("GET /todos/1 returns correct status and todo fields", async () => {
    const response = await api.get("/todos/1");

    expect(response.status).toBe(200);
    expect(response.data).toEqual(
      expect.objectContaining({
        userId: expect.any(Number),
        id: 1,
        title: expect.any(String),
        completed: expect.any(Boolean),
      })
    );
  });

  test("POST /posts returns 201 and created post data", async () => {
    const response = await api.post("/posts", 
        {
            title: "Hello from axios",
            body: "This is a test post",
            userId: 1,
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
        }
    );

    expect(response.status).toBe(201);
    expect(response.data).toEqual(
      expect.objectContaining({
        title: "Hello from axios",
        body: "This is a test post",
        userId: 1,
        id: expect.any(Number),
      })
    );
  });

  test("POST /comments returns 201 and created comment data", async () => {
    const response = await api.post("/comments", 
        {
            postId: 1,
            name: "John Doe",
            email: "test@example.com",
            body: "Nice post!",
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
        }
    );

    expect(response.status).toBe(201);
    expect(response.data).toEqual(
      expect.objectContaining({
        postId: 1,
        name: "John Doe",
        email: "test@example.com",
        body: "Nice post!",
        id: expect.any(Number),
      })
    );
  });
});

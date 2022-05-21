const supertest = require("supertest");

describe("POST /user", () => {
  it("should return 200 and the object of user", () => {
    return supertest("http://localhost:3022/v1")
      .post("/user")
      .send({ name: "test", email: "test_jest1@email.com", password: "123456" })
      .set("Accept", "application/json")
      .expect(200)
      .then(() => console.log("ok"));
  });

  it("should return 400 and the object od user", () => {
    return supertest("http://localhost:3022/v1")
      .post("/user")
      .send({ name: null, email: null, password: null })
      .set("Accept", "application/json")
      .expect(400)
      .then(() => console.log("OK"));
  });
});

describe("GET /user", () => {
  it("should get users", () => {
    return supertest("http://localhost:3022/v1")
      .get("/user")
      .set("Accept", "applications/json")
      .expect(200)
      .then(() => {
        console.log("OK");
      });
  });
});

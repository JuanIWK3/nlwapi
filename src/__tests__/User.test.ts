import request from "supertest";
import { getConnection } from "typeorm";
import { app } from "../app";
import createConnection from "../database";

describe("Users", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
    await connection.createQueryBuilder().delete().from("users").execute();
  });
  it("should be able to create a new user", async () => {
    const response = await request(app).post("/createuser").send({
      email: "user@uasdasdffdserexample.com",
      name: "User Examples",
    });
    expect(response.status).toBe(201);
  });
});

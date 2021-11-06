import request from "supertest";
import { app } from "../app";
import createConnection from "../database";

describe("Surveys", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.createQueryBuilder().delete().from("surveys").execute();
  });
  it("should be able to create a new survey", async () => {
    const response = await request(app).post("/surveys").send({
      title: "Title Example",
      description: "Description Example",
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  it("should be able to create a new survey 2", async () => {
    const response = await request(app).post("/surveys").send({
      title: "Title Example2",
      description: "Description Example2",
    });

    expect(response.status).toBe(201);
  });

  it("should be able to get all surveys", async () => {
    const response = await request(app).get("/surveys");
    expect(response.body.length).toBe(2);
  });
});

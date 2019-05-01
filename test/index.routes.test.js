import server from "../src/app";
import request from "supertest";

afterEach(() => {
    server.close();
});

describe("routes: index", () => {
    test("should respond as expected", async () => {
        const response = await request(server).get("/");
        expect(response.status).toEqual(200);
        expect(response.type).toEqual("application/json");
        expect(response.body.data).toEqual("Sending some JSON");
        expect(Object.keys(response.body.person)).toEqual(
            expect.arrayContaining(["name", "lastname", "role", "age"])
        );
    });
});
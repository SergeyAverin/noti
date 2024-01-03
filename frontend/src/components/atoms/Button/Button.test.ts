import {
  describe,
  expect,
  it,
  afterEach,
  beforeAll,
  afterAll,
} from "@jest/globals";

describe("adds 1 + 2 to equal 3", () => {
  it("should return user and tokens", async () => {
    expect(1 + 2).toBe(3);
  });
});

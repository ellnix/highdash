import assert from "assert";
import highdash from "../src/highdash.js";

describe("highdash.array_product", () => {
  it("returns the product of all the elements", () => {
    const input_array = [2, 2, 3];

    const result = highdash.array_product(input_array);

    assert.strictEqual(result, 12);
  });

  it("returns 1 if the array is empty", () => {
    const input_array = [];

    const result = highdash.array_product(input_array);

    assert.strictEqual(result, 1);
  });
});

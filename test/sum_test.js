import assert from 'assert'
import highdash from '../src/highdash.js'

describe("highdash.array_sum", () => {
  it("returns the sum of the elements", () => {
    const input_array = [1, 2 , 3]

    const result = highdash.array_sum(input_array)

    assert.strictEqual(result, 6)
  })

  it("returns 0 if the array is empty", () => {
    const input_array = []

    const result = highdash.array_sum(input_array)

    assert.strictEqual(result, 0)
  })
})

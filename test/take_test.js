import assert from 'assert'
import highdash from '../src/highdash.js'

describe("highdash.array_take", () => {
  it("takes elements from the front", () => {
    let input_array = [1, 2, 3]
    let n = 2

    let result = highdash.array_take(input_array, n)

    assert.deepEqual(result, [1, 2])
  })

  it("takes elements of any type", () => {
    let input_array = ["hello", "world", "saturn", "jupiter"]
    let n = 3

    let result = highdash.array_take(input_array, n)

    assert.deepEqual(result, ["hello", "world", "saturn"])
  })

  it("does not edit original array", () => {
    let input_array = [1, 2, 3]
    let n = 2

    highdash.array_take(input_array, n)

    assert.deepEqual(input_array, [1, 2, 3])
  })

  it("returns an array padded with null if n is bigger than length", () => {
    let input_array = [1, 2, 3]
    let n = 4

    const result = highdash.array_take(input_array, n)

    assert.deepEqual(result, [1, 2, 3, null])
  })
})

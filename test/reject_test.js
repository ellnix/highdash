import assert from 'assert'
import highdash from '../src/highdash'

describe("highdash.array_reject", () => {
  it("returns an array without the elements that pass the condition", () => {
    const input_array = [1, 2, 3, 4]
    const predicate = n => n % 2 === 0

    const result = highdash.array_reject(input_array, predicate)

    assert.deepEqual(result, [1, 3])
  })

  it("returns an empty array when all elements pass the condition", () => {
    const input_array = [1, 2, 3, 4]
    const predicate = n => n < 5

    const result = highdash.array_reject(input_array, predicate)

    assert.deepEqual(result, [])
  })

  it("returns an identical array if no elements passed the condition", () => {
    const input_array = [1, 2, 3, 4]
    const predicate = n => n > 5

    const result = highdash.array_reject(input_array, predicate)

    assert.deepEqual(result, input_array)
  })
})

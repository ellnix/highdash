import assert from 'assert'
import highdash from '../src/highdash.js'

describe("highdash.array_some", () => {
  it('returns true if at least one element returns true', () => {
    const input_array = [1, 2, 3]
    const predicate = n => n % 2 === 0

    const result = highdash.array_some(input_array, predicate)

    assert.equal(result, true)
  })

  it('returns true if all of the elements return true', () => {
    const input_array = [2, 4, 6]
    const predicate = n => n % 2 === 0

    const result = highdash.array_some(input_array, predicate)

    assert.equal(result, true)
  })

  it('returns false when no element returns true', () => {
    const input_array = [1, 3, 5]
    const predicate = n => n % 2 === 0

    const result = highdash.array_some(input_array, predicate)

    assert.equal(result, true)
  })
})

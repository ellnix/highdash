import assert from 'assert'
import highdash from '../src/highdash.js'

describe("highdash.array_indexof", () => {
  it('returns the index if element can be found', () => {
    const input_array = ["rust", "java", "c"]

    const result = highdash.array_indexof(input_array, "java")

    assert.strictEqual(result, 1)
  })

  it('returns -1 if the element cannot be found', () => {
    const input_array = ["rust", "java", "c"]

    const result = highdash.array_indexof(input_array, "javascript")

    assert.strictEqual(result, -1)
  })

  it('uses strict comparison to return results', () => {
    const input_array = [false, 2, 0]

    const result = highdash.array_indexof(input_array, 0)

    assert.strictEqual(result, 2)
  })
})

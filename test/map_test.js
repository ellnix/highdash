import assert from 'assert'
import highdash from '../src/highdash.js'

describe('highdash.array_map', () => {
  it('transforms every value', () => {
    const original_array = [1, 2, 3]
    const transformer = x => x * 2

    const result =
      highdash.array_map(original_array, transformer)

    assert.deepEqual(result, [2, 4, 6])
  })
})


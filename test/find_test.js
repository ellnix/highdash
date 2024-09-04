import assert from 'assert'
import highdash from '../src/highdash.js'

describe('highdash.array_find', () => {
  it('returns the element for which predicate returns true', () => {
    const input_array = [1, 2, 3]
    const predicate = n => n % 2 === 0

    const result = highdash.array_find(input_array, predicate)

    assert.strictEqual(result, 2)
  })

  it('returns the **first** element for which predicate returns true', () => {
    const input_array = ["hello", "world"]
    const predicate = word => word.length > 2

    const result = highdash.array_find(input_array, predicate)

    assert.strictEqual(result, "hello")
  })

  it('returns null if no element matches condition', () => {
    const input_array = ["hello", "world"]
    const predicate = word => word.length < 2

    const result = highdash.array_find(input_array, predicate)

    assert.strictEqual(result, null)
  })

  it('stops running when element is found', () => {
    const input_array = ["hi", "hello", "world"]

    let counter = 0
    const predicate = word =>  {
      counter += 1
      return word.length > 2
    }

    const result = highdash.array_find(input_array, predicate)

    assert.strictEqual(result, "hello")
    assert.strictEqual(counter, 2)
  })
})

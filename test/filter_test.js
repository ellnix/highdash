import assert from 'assert'
import highdash from '../src/highdash.js'

describe("highdash.array_filter", () => {
  it("removes items for which the function returns false", () => {
    const input_array = [1, 2, 3, 4]
    const predicate = n => n % 2 === 0

    const filtered_array = highdash.array_filter(input_array, predicate)

    assert.deepEqual(filtered_array, [2, 4])

    const string_array = ["hello", "hi", "world"]
    const string_predicate = s => s.length > 3

    const string_result = highdash.array_filter(string_array, string_predicate)

    assert.deepEqual(string_result, ["hello", "world"])
  })

  it("removes items for which the function returns undefined", () => {
    const input_array = [{ name: 'John' }, { name: 'Jane', last: 'Doe' }, { name: 'Jack', last: 'Sparrow' }]
    const predicate = person => person.last

    const filtered_array = highdash.array_filter(input_array, predicate)

    assert.deepEqual(filtered_array, 
      [{ name: 'Jane', last: 'Doe' }, { name: 'Jack', last: 'Sparrow' }]
    )
  })
})

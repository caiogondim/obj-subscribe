const objSubscribe = require('../lib')

it('executes callback whenever object is changed', () => {
  let count = 0
  function callback() {
    count++
  }

  const obj = objSubscribe({
    a: 1,
    b: 2
  }, callback)

  expect(obj.a).toEqual(1)
  expect(obj.b).toEqual(2)
  obj.a = 3
  obj.b = 4
  expect(obj.a).toEqual(3)
  expect(obj.b).toEqual(4)

  expect(count).toEqual(2)
})

it('receives obj as callback argument', () => {
  function callback(callbackObj) {
    expect(callbackObj).toEqual(obj)
  }

  const obj = objSubscribe({
    a: 1,
    b: 2,
  }, callback)

  obj.a = 3
})

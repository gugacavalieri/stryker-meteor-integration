import td from 'testdouble'

describe('example-module', () => {
  const Meteor = td.object(['call'])
  const ExampleCollection = td.object(['insert'])
  let flattenAndCall, exampleInsert

  beforeEach(() => {
    td.replace('meteor/meteor', { Meteor })
    td.replace('../imports/example-collection', { ExampleCollection })
    flattenAndCall = require('../imports/hello-module').flattenAndCall
    exampleInsert = require('../imports/hello-module').exampleInsert
  })

  afterEach(() => {
    td.reset()
  })

  it('calls a meteor method', () => {
    flattenAndCall([1, 2, [3, 4, [5]]])
    td.verify(Meteor.call('example-method', [1, 2, 3, 4, 5]))
  })

  it('inserts a value', () => {
    exampleInsert(123)
    td.verify(ExampleCollection.insert({ value: 123 }))
  })
})

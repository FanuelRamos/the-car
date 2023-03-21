import Account from './account-entity'

describe('Account Entity', () => {
  test('Should throws if required fields are empty', () => {
    expect(() => new Account({
      name: '',
      username: '',
      email: '',
      password: '',
      description: ''
    })).toThrowError()
  })
})

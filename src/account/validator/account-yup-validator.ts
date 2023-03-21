import ValidatorInterface from '../../@shared/validator/validator-interface'
import Account from '../entity/account-entity'
import * as yup from 'yup'

export default class AccountYupValidator implements ValidatorInterface<Account> {
  validate (entity: Account): void {
    try {
      yup
        .object()
        .shape({
          name: yup.string().required('Name is required'),
          username: yup.string().required('Username ir required'),
          email: yup.string().email().required('Email is required'),
          password: yup.string().required('Password is required'),
          description: yup.string().required('Description is required')
        })
        .validateSync(
          {
            name: entity.name,
            username: entity.username,
            email: entity.email,
            password: entity.password,
            description: entity.description
          },
          {
            abortEarly: false
          }
        )
    } catch (errors) {
      const e = errors as yup.ValidationError
      e.errors.forEach(error => {
        throw new Error(error)
      })
    }
  }
}

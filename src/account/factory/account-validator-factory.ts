import ValidatorInterface from '../../@shared/validator/validator-interface'
import Account from '../entity/account-entity'
import AccountYupValidator from '../validator/account-yup-validator'

export default class AccountValidatorFactory {
  static createAccountValidator (): ValidatorInterface<Account> {
    return new AccountYupValidator()
  }
}

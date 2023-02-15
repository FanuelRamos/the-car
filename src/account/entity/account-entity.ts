/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { v4 as uuidV4 } from 'uuid'
import BaseEntity from '../../@shared/domain/entity/base-entity'
import Id from '../../@shared/domain/value-object/id-value-object'

interface AccountProperties {
  id?: Id
  name: string
  username: string
  email: string
  password: string
  description: string
  profilePicture?: string
  isVerified?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export default class Account extends BaseEntity {
  private _name: string
  private _username: string
  private _email: string
  private _password: string
  private _description: string
  private _profilePicture: string
  private _isVerified: boolean

  constructor (properties: AccountProperties) {
    super(properties.id, properties.createdAt, properties.updatedAt)
    this._name = properties.name
    this._username = properties.username
    this._email = properties.email
    this._password = properties.password
    this._description = properties.description
    this._profilePicture = properties.profilePicture ?? 'profile.jpg'
    this._isVerified = properties.isVerified ?? false
  }

  get name (): string { return this._name }
  get username (): string { return this._username }
  get email (): string { return this._email }
  get password (): string { return this._password }
  get description (): string { return this._description }
  get profilePicture (): string { return this._profilePicture }
  get isVerified (): boolean { return this._isVerified }

  set name (name: string) { this._name = name }
  set username (username: string) { this._username = username }
  set email (email: string) { this._email = email }
  set password (password: string) { this._password = password }
  set description (description: string) { this._description = description }
  set profilePicture (profilePicture: string) { this._profilePicture = profilePicture }
  set isVerified (isVerified: boolean) { this._isVerified = isVerified }
}

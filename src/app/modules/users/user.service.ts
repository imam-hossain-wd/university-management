import config from '../../../config'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generateUserId()
  user.id = id
  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)

  if (!createUser) {
    throw new Error('Failed to create user!')
  }
  return createdUser
}

const getUserFromDB = async () => {
  const user = User.find({})
  return user
}

const deleteUserFromDB = async (id: string) => {
  const data = User.deleteOne({ id: id })
  return data
}

const updatePasswordFromDB = async (id: string, password: string) => {
  const user = await User.updateOne(
    { id: id },
    { $set: { password: password } }
  )
  return user
}

export default {
  createUser,
  getUserFromDB,
  deleteUserFromDB,
  updatePasswordFromDB,
}

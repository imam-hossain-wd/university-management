import { User } from './user.model'

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createAt: -1 })
    .lean()
  console.log(lastUser)
  return lastUser?.id
}

export const generateUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0') //00000
  //increment by 1
  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementedId
}

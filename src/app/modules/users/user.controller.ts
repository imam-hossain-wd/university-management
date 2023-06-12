import { Request, Response } from 'express'
import usersService from './user.service'
import userService from './user.service'

const createduser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    console.log(user)
    const result = await usersService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: result,
    })
  } catch (err) {
    res.status(400).json({
      sucess: false,
      message: 'Failed to create user',
    })
  }
}
const getUser = async (req: Request, res: Response) => {
  try {
    const user = await usersService.getUserFromDB()
    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: user,
    })
  } catch (err) {
    res.status(400).json({
      sucess: false,
      message: 'Failed to create user',
    })
  }
}

const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id
  console.log(id)
  const deletedUser = await userService.deleteUserFromDB(id)
  res.status(200).json({
    status: 'delete success',
    data: id,
  })
  return deletedUser
}

const updatePassword = async (req: Request, res: Response) => {
  const id = req.params.id
  const { password } = req.body

  console.log(id, password)
  console.log(typeof password)

  const deletedUser = await userService.updatePasswordFromDB(id, password)
  res.status(200).json({
    status: 'delete success',
    data: deletedUser,
  })
  return deletedUser
}

export default {
  createduser,
  getUser,
  deleteUser,
  updatePassword,
}

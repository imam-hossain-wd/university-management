import { User } from './user.model';

export const findLastUserId = async (): Promise<string | undefined> => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastUser?.id;
};

export const generateUserId = async (): Promise<string> => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0'); //
  const number1 = parseInt(currentId, 10);
  const number = number1 + 1;
  const paddedId = String(number).padStart(5, '0');
  return paddedId;
};

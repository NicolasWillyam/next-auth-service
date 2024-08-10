import { db } from "../lib/db";

export const getTwoFactorConfirmationByUserID = async (userID: string) => {
  try {
    const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique({
      where: { userID },
    });

    return twoFactorConfirmation;
  } catch {
    return null;
  }
};

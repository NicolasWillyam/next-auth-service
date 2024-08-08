"use server";

import { getUserByEmail } from "../data/user";
import { getVerificationTokenByToken } from "../data/verification-token";
import { db } from "../lib/db";

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: "Token does not exist!" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exist!" };
  }

  await db.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  // In dev mode this function will be call twice,
  // but in production mode just once.
  //   await db.user.delete({
  //     where: {
  //       id: existingUser.id,
  //     },
  //   });

  return { success: "Email verified!" };
};

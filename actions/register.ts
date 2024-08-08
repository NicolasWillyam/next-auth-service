"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { RegisterSchema } from "../schemas";

import { getUserByEmail } from "../data/user";
import { generateVerificationToken } from "../lib/tokens";
import { sendVerificationEmail } from "../lib/mail";
import { db } from "../lib/db";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;
  const hashPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in used!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });

  // TODO: Send email verifications
  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "Confirmation email sent!" };
};

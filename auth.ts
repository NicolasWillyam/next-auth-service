import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { db } from "./lib/db";
import { getUserByID } from "./data/user";
import { User as NextAuthUser } from "next-auth";
import { UserRole } from "@prisma/client";
import { getTwoFactorConfirmationByUserID } from "@/data/two-factor-confirmation";

interface CustomUser extends NextAuthUser {
  role?: UserRole; // Add the role property as optional
}
export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      const userID = user.id;

      // Ensure userID is defined before proceeding
      if (!userID) return false;

      const existingUser = await getUserByID(userID);

      // The user who has not verified will be blocked from logging in
      // Prevent sign in without email verification
      if (!existingUser?.emailVerified) return false;

      if (existingUser?.isTwoFactorEnabled) {
        return true;
      }

      // TODO: Checking "Invalid credentials", uncomment later
      // if (existingUser?.isTwoFactorEnabled) {
      //   const twoFactorConfirmation = await getTwoFactorConfirmationByUserID(
      //     existingUser.id
      //   );

      //   if (!twoFactorConfirmation) return false;

      //   await db.twoFactorConfirmation.delete({
      //     where: { id: twoFactorConfirmation.id },
      //   });
      // }
      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      // Type assertion to tell TypeScript that session.user is of type CustomUser
      if (token.role && session.user) {
        (session.user as CustomUser).role = token.role as UserRole;
      }

      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserByID(token.sub);

      if (!existingUser) return token;
      token.role = existingUser.role;
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});

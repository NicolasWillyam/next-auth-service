"use server";

import { signOut } from "../auth";

export const logout = async () => {
  // TODO: some server stuff
  await signOut();
};

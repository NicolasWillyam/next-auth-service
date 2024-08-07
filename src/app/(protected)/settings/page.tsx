import React from "react";
import { auth, signOut } from "../../../auth";
import DataTable from "@/components/data-table"; // Adjust import path
import SignOutButton from "@/components/auth/sign-out-button";

const SettingsPage = async () => {
  const session = await auth();

  // Transform session data into an array of key-value pairs
  const sessionData = session
    ? Object.entries(session).flatMap(([key, value]) => {
        if (typeof value === "object" && value !== null) {
          return Object.entries(value).map(([nestedKey, nestedValue]) => ({
            key: `${key}.${nestedKey}`,
            value:
              typeof nestedValue === "object"
                ? JSON.stringify(nestedValue)
                : nestedValue,
          }));
        }
        return [
          {
            key,
            value: typeof value === "object" ? JSON.stringify(value) : value,
          },
        ];
      })
    : [];

  return (
    <div>
      <h1>Session Information</h1>
      <DataTable data={sessionData} />
      <SignOutButton />
    </div>
  );
};

export default SettingsPage;

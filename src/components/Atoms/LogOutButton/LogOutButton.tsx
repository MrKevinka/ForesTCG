"use client";

import { logOut } from "@/app/action";

export const LogOutButton = () => {
  return (
    <button
      onClick={() => {
        logOut();
      }}
      className="rounded-md border border-black p-2"
    >
      Logout
    </button>
  );
};

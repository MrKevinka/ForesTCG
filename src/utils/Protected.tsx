import { redirect } from "next/navigation";
import { FC, ReactNode } from "react";
import { getAuthorizedUser } from "../action";

export const Protected: FC<{ children: ReactNode }> = async ({ children }) => {
  const user = await getAuthorizedUser();
  if (!user) return redirect("login");

  return <>{children}</>;
};

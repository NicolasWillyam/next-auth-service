"use client";

import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";
import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <>
        <FormError message="You do not have permission to view this content!" />
        {children}
      </>
    );
  }

  return (
    <>
      <FormSuccess message="You are allowed to see this content!" />
      {children}
    </>
  );
};

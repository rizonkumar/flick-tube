import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

export const AuthButton = () => {
  // TODO: Implement Different Auth States
  return (
    <Button
      variant="outline"
      className="border-blue-500/2 [] rounded-full px-4 py-2 text-sm font-medium text-blue-600 shadow-none hover:text-blue-500"
    >
      <UserCircleIcon />
      Sign In
    </Button>
  );
};

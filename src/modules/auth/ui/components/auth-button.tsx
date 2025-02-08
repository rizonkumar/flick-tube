"use client";

import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
        {/* TODO: Add Menu Items in the Dropdown */}
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="border-blue-500/2 [] rounded-full px-4 py-2 text-sm font-medium text-blue-600 shadow-none hover:text-blue-500"
          >
            <UserCircleIcon />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};

import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "../lib/utils";

export default function Home() {
  return (
    <main className="w-full flex h-screen items-center justify-center bg-[#191919]">
      <div className="flex flex-col items-center space-y-6">
        <h1 className={cn("text-6xl font-medium text-white drop-shadow-sm")}>
          Next AuthJS
        </h1>
        <p className="text-white text-lg font-light">
          A simple authentication service created by NextJs and AuthJs
        </p>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

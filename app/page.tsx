import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "../lib/utils";

export default function Home() {
  return (
    <main className="w-full flex h-screen items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        <h1 className={cn("text-6xl font-medium drop-shadow-sm")}>
          Next AuthJS
        </h1>
        <p className="text-lg text-black/50 font-light">
          A simple authentication service created by NextJs and AuthJs
        </p>
        <div>
          <LoginButton asChild>
            <Button className="text-white" size={"lg"}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

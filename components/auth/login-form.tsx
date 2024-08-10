"use client";
import React, { startTransition, useState, useTransition } from "react";
import CardWrapper from "./card-wrapper";
import { LoginSchema } from "../../schemas";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FormError from "../form-error";
import FormSuccess from "../form-success";
import { login } from "../../actions/login";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "../../routes";
import { useSearchParams } from "next/navigation";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    console.log(values);
    startTransition(() => {
      login(values).then((data) => {
        if (data) {
          setError(data?.error);
          // TODO: Add when we add 2FA
          setSuccess(data?.success);
        }
      });
    });
  };
  return (
    <CardWrapper
      headerLabel="Sign in to use Notion"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <div className="flex flex-col gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4 text-destructive">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="user@example.com"
                        type="email"
                      />
                    </FormControl>
                    {/* <p className="text-xs leading-tighter">
                      Use an organization email to easily collaborate with
                      teammates
                    </p> */}
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal">Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="******"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            </div>
            <FormError message={error || urlError} />
            <FormSuccess message={success} />
            <Button
              disabled={isPending}
              type="submit"
              className="w-full text-white"
            >
              Continue
            </Button>
          </form>
        </Form>
        <div className="flex flex-col gap-2.5 px-2.5">
          <div className="h-[1px] w-full bg-white/10 my-2.5" />
          <Button
            size={"sm"}
            className="w-full flex items-center gap-2"
            variant={"outline"}
            onClick={() => onClick("google")}
          >
            <FcGoogle size={16} />
            Continue with Google
          </Button>
          <Button
            size={"sm"}
            className="w-full flex items-center gap-2"
            variant={"outline"}
            onClick={() => onClick("github")}
          >
            <FaGithub size={16} />
            Continue with Github
          </Button>
        </div>
      </div>
    </CardWrapper>
  );
};

export default LoginForm;

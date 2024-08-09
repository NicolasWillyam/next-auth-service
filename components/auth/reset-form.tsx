"use client";
import React, { startTransition, useState, useTransition } from "react";
import CardWrapper from "./card-wrapper";
import { LoginSchema, ResetSchema } from "../../schemas";
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
import { reset } from "../../actions/reset";

import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "../../routes";

const ResetForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      reset(values).then((data) => {
        if (data) {
          setError(data?.error);
          setSuccess(data?.success);
        }
      });
    });
  };
  return (
    <CardWrapper
      headerLabel="Forgot you password"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
      // showSocial
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
            </div>
            <FormError message={error} />
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
        {/* <div className="flex flex-col gap-2.5 px-2.5">
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
        </div> */}
      </div>
    </CardWrapper>
  );
};

export default ResetForm;

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
import { Spinner } from "../spinner";

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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <div className="space-y-2 text-destructive mb-2">
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
              {isPending ? (
                <>
                  <Spinner className="mr-2" />
                </>
              ) : (
                "Continue"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </CardWrapper>
  );
};

export default ResetForm;

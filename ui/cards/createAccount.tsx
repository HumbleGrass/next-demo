"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export default function CreateAccount() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid gap-4'>
          <div className='grid grid-cols-2 gap-6'>
            <Button variant='outline' className='flex-grow'>
              <GitHubLogoIcon className='mr-2'></GitHubLogoIcon>
              Github
            </Button>
            <Button variant='outline' className='flex-grow'>
              <GitHubLogoIcon className='mr-2'></GitHubLogoIcon>
              Google
            </Button>
          </div>
          <div className='flex items-center gap-2'>
            <span className='flex-1 border-b'></span>
            <span className='text-muted-foreground text-xs'>
              Or continue with
            </span>
            <span className='flex-1 border-b'></span>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-6'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='m@example.com'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        placeholder='placeholder'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <Button type='submit' className='w-full'>
                Create account
              </Button>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
}

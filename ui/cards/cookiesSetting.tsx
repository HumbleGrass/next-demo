"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StarIcon, ChevronDownIcon, CircleIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  strictlyNecessary: z.boolean().default(false),
  functionalCookies: z.boolean().default(false),
  performanceCookies: z.boolean().default(false),
});

export default function CookiesSetting() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      strictlyNecessary: false,
      functionalCookies: false,
      performanceCookies: false,
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-4'>
            <FormField
              name='strictlyNecessary'
              render={({ field }) => (
                <FormItem className='flex items-center gap-3'>
                  <div className='flex-grow'>
                    <FormLabel>Strictly Necessary</FormLabel>
                    <FormDescription>
                      These cookies are essential in order to use the website
                      and use its features.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    ></Switch>
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
            <FormField
              name='functionalCookies'
              render={({ field }) => (
                <FormItem className='flex items-center gap-3'>
                  <div className='flex-grow'>
                    <FormLabel>Strictly Necessary</FormLabel>
                    <FormDescription>
                      These cookies allow the website to provide personalized
                      functionality.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    ></Switch>
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
            <FormField
              name='performanceCookies'
              render={({ field }) => (
                <FormItem className='flex items-center gap-3'>
                  <div className='flex-grow'>
                    <FormLabel>Performance Cookies</FormLabel>
                    <FormDescription>
                      These cookies help to improve the performance of the
                      website.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    ></Switch>
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
            <Button className="w-full" variant='outline' type='submit'>
              Save preferences
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

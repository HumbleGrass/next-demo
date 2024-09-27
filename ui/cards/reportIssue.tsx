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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  area: z.enum(["Team", "Billing", "Account", "Deployments", "Support"]),
  securityLevel: z.enum([
    "Severity1(Highest)",
    "Severity2",
    "Severity3",
    "Severity4(Lowest)",
  ]),
  subject: z.string(),
  description: z.string(),
});

export default function ReportIssue() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      area: "Team",
      securityLevel: "Severity2",
      subject: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Report an issue</CardTitle>
        <CardDescription>
          What area are you having problems with?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-4'>
            <div className='grid grid-cols-2 gap-6'>
              <FormField
                control={form.control}
                name='area'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Area</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select a verified email to display' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='Team'>Team</SelectItem>
                        <SelectItem value='Billing'>
                          Billing(Highest)
                        </SelectItem>
                        <SelectItem value='Account'>Account</SelectItem>
                        <SelectItem value='Deployments'>Deployments</SelectItem>
                        <SelectItem value='Support'>Support</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name='securityLevel'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Security Level</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select a verified email to display' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='Severity1(Highest)'>
                          Severity1(Highest)
                        </SelectItem>
                        <SelectItem value='Severity2'>Severity2</SelectItem>
                        <SelectItem value='Severity3'>Severity3</SelectItem>
                        <SelectItem value='Severity4(Lowest)'>
                          Severity4(Lowest)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            </div>
            <FormField
              control={form.control}
              name='subject'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder='I need help with...' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Please include all information relevant to your issue.'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <div className='flex justify-between'>
              <Button variant='ghost' type='reset'>
                Cancel
              </Button>
              <Button type='submit'>Submit</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

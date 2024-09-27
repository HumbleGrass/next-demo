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
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { IdCardIcon } from "@radix-ui/react-icons";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, addYears } from 'date-fns'

const expires = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
];

const years = (() => {
    const list = []
    for(let i = 0; i < 10; i++) {
        list.push(format(addYears(new Date(), i), 'yyyy'))
    }
    return list
})();

const FormSchema = z.object({
  type: z.enum(["Card", "Paypal", "Apple"]),
  name: z.string().min(2).max(50),
  cardNumber: z.string().min(16).max(16),
  expires: z.string(),
  year: z.string(),
  cvc: z.string(),
});

const payMethodList = [
  { label: "Card", value: "Card" },
  { label: "Paypal", value: "Paypal" },
  { label: "Apple", value: "Apple" },
];
export default function PaymentMethod() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: "Card",
      name: "",
      cardNumber: "",
      expires: "March",
      year: format(new Date(), 'yyyy'),
      cvc: "",
    },
  });

  function onSubmit() {}
  return (
    <Card>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl'>Payment Method</CardTitle>
        <CardDescription>
          Add a new payment method to your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-6'>
            <FormField
              control={form.control}
              name='type'
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <RadioGroup
                      className='grid gap-4 grid-cols-3'
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      {payMethodList.map((item) => (
                        <div key={item.value}>
                          <RadioGroupItem
                            value={item.value}
                            id={item.value}
                            className='peer sr-only'
                          ></RadioGroupItem>
                          <Label
                            htmlFor={item.value}
                            className='flex flex-col items-center gap-3 hover:bg-accent border-2 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary bg-popover rounded-md p-4'
                          >
                            <IdCardIcon className='w-6 h-6'></IdCardIcon>
                            <span>{item.label}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='First Last' {...field} />
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name='cardNumber'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card number</FormLabel>
                  <FormControl>
                    <Input placeholder='' {...field} />
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
            <div className='grid grid-cols-3 gap-3'>
              <FormField
                control={form.control}
                name='expires'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expires</FormLabel>
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
                        {expires.map((item) => (
                          <SelectItem key={item} value={item}>{item}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name='year'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year</FormLabel>
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
                        { years.map(item => (
                            <SelectItem key={item} value={item}>{item}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name='cvc'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVC</FormLabel>
                    <FormControl>
                      <Input placeholder='CVC' {...field} />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
            </div>
            <Button type='submit' className='w-full'>
              Continue
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

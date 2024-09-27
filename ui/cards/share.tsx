"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Share() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Share this document</CardTitle>
        <CardDescription>
          Anyone with the link can view this document.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex'>
          <Input readOnly value='https://example.com/invite/abcdef'></Input>
          <Button className='ml-2' variant='secondary'>
            Copy Link
          </Button>
        </div>
        <div className='border-b my-4'></div>
        <div className='mb-4 font-medium text-sm'>People with access</div>
        <div className='grid gap-6'>
          <div className='flex items-center justify-between gap-6'>
            <div className='flex items-center'>
              <Avatar>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className='ml-4'>
                <div className='text-sm font-medium leading-none'>
                  Sofia Davis
                </div>
                <div className='text-sm text-muted-foreground'>
                  m@example.com
                </div>
              </div>
            </div>
            <Select>
              <SelectTrigger className='w-[120px]'>
                <SelectValue placeholder='Apple' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='apple'>Apple</SelectItem>
                  <SelectItem value='banana'>Banana</SelectItem>
                  <SelectItem value='blueberry'>Blueberry</SelectItem>
                  <SelectItem value='grapes'>Grapes</SelectItem>
                  <SelectItem value='pineapple'>Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='flex items-center justify-between gap-6'>
            <div className='flex items-center'>
              <Avatar>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className='ml-4'>
                <div className='text-sm font-medium leading-none'>
                  Sofia Davis
                </div>
                <div className='text-sm text-muted-foreground'>
                  m@example.com
                </div>
              </div>
            </div>
            <Select>
              <SelectTrigger className='w-[120px]'>
                <SelectValue placeholder='apple' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='apple'>Apple</SelectItem>
                  <SelectItem value='banana'>Banana</SelectItem>
                  <SelectItem value='blueberry'>Blueberry</SelectItem>
                  <SelectItem value='grapes'>Grapes</SelectItem>
                  <SelectItem value='pineapple'>Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='flex items-center justify-between gap-6'>
            <div className='flex items-center'>
              <Avatar>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className='ml-4'>
                <div className='text-sm font-medium leading-none'>
                  Sofia Davis
                </div>
                <div className='text-sm text-muted-foreground'>
                  m@example.com
                </div>
              </div>
            </div>
            <Select>
              <SelectTrigger className='w-[120px]'>
                <SelectValue placeholder='apple' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='apple'>Apple</SelectItem>
                  <SelectItem value='banana'>Banana</SelectItem>
                  <SelectItem value='blueberry'>Blueberry</SelectItem>
                  <SelectItem value='grapes'>Grapes</SelectItem>
                  <SelectItem value='pineapple'>Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

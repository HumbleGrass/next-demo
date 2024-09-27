"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Command,
  CommandGroup,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandInput,
} from "@/components/ui/command";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { ChevronDownIcon } from "@radix-ui/react-icons";
export default function TeamMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Invite your team members to collaborate.
        </CardDescription>
      </CardHeader>
      <CardContent>
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
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"}>
                  Owner
                  <ChevronDownIcon className='ml-2'></ChevronDownIcon>
                </Button>
              </PopoverTrigger>
              <PopoverContent className='p-0'>
                <Command>
                  <CommandInput placeholder='Filter team...' />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                      <CommandItem className='flex flex-col items-start'>
                        <div>Viewer</div>
                        <div>Can view and comment.</div>
                      </CommandItem>
                      <CommandItem className='flex flex-col items-start'>
                        <div>Developer</div>
                        <div>Can view,comment and edit.</div>
                      </CommandItem>
                      <CommandItem className='flex flex-col items-start'>
                        <div>Billing</div>
                        <div>Can view and comment.</div>
                      </CommandItem>
                      <CommandItem className='flex flex-col items-start'>
                        <div>Owner</div>
                        <div>Can view and comment.</div>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
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
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"}>
                  Owner
                  <ChevronDownIcon className='ml-2'></ChevronDownIcon>
                </Button>
              </PopoverTrigger>
              <PopoverContent className='p-0'>
                <Command>
                  <CommandInput placeholder='Filter team...' />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                      <CommandItem className='flex flex-col items-start'>
                        <div>Viewer</div>
                        <div>Can view and comment.</div>
                      </CommandItem>
                      <CommandItem className='flex flex-col items-start'>
                        <div>Developer</div>
                        <div>Can view,comment and edit.</div>
                      </CommandItem>
                      <CommandItem className='flex flex-col items-start'>
                        <div>Billing</div>
                        <div>Can view and comment.</div>
                      </CommandItem>
                      <CommandItem className='flex flex-col items-start'>
                        <div>Owner</div>
                        <div>Can view and comment.</div>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

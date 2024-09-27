"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StarIcon, ChevronDownIcon, CircleIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";

import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { PlusIcon } from "@radix-ui/react-icons";

import { useState } from "react";

type Checked = DropdownMenuCheckboxItemProps['checked']
export default function Shadcn() {

  const [showStar, setStar] = useState<Checked>(true);
  const [showFork, setFork] = useState<Checked>(false);
  const [showReport, setReport] = useState<Checked>(false);

  return (
    <Card className='p-6'>
      <div className='grid grid-cols-[1fr_110px] items-start gap-4'>
        <div className=''>
          <div className='font-semibold'>shadcn/ui</div>
          <p className='text-muted-foreground text-sm'>
            Beautifully designed components that you can copy and paste into
            your apps. Accessible. Customizable. Open Source.
          </p>
        </div>
        <Button variant='secondary' className='gap-2'>
          <StarIcon className='w-4 h-4'></StarIcon>
          <span>Start</span>
          <Separator orientation='vertical'></Separator>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <ChevronDownIcon></ChevronDownIcon>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={16} align='end' alignOffset={-16}>
              <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
              <DropdownMenuSeparator></DropdownMenuSeparator>
              <DropdownMenuGroup>
                <DropdownMenuCheckboxItem
                  checked={showStar}
                  onCheckedChange={setStar}
                >
                  Star
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showFork}
                  onCheckedChange={setFork}
                >
                  Fork
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showReport}
                  onCheckedChange={setReport}
                >
                  Report
                </DropdownMenuCheckboxItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator></DropdownMenuSeparator>
              <DropdownMenuItem>
                <div className='flex items-center gap-2'>
                  <PlusIcon className='w-4 h-4'></PlusIcon>
                  <div>Create List</div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Button>
      </div>
      <div className='mt-4 flex items-center gap-4 text-muted-foreground text-sm'>
        <span className='inline-flex items-center'>
          <CircleIcon className='mr-1 w-3 h-3 text-sky-400'></CircleIcon>
          TypeScript
        </span>
        <span className='inline-flex items-center'>
          <StarIcon className='mr-1 w-3 h-3'></StarIcon>
          20k
        </span>
        <span>Updated April 2023</span>
      </div>
    </Card>
  );
}
